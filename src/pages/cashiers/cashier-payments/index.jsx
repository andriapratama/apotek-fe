import { ButtonPrimay, ButtonSecondary } from "../../../components/button";
import { useCashierPaymentHook } from "./cashier-payment.hook";
import { useFormatterHook } from "../../../components/formatter.hook";

function CashierPayment({
	totalPrice,
	isShowPayment,
	setIsShowPayment,
	transactionList,
	setTransactionList,
	setSearch,
	showTransactionId,
	setIsShowAlert,
	setProductList,
	transactionId,
}) {
	const {
		storeTransactionData,
		regex,
		setErrorPayment,
		errorPayment,
		payment,
		setPayment,
		grandTotal,
		setGrandTotal,
		grandDiscount,
		setGrandDiscount,
		grandTotalDiscount,
		setGrandTotalDiscount,
		changePayment,
		setChangePayment,
	} = useCashierPaymentHook(
		totalPrice,
		transactionList,
		setTransactionList,
		setSearch,
		setIsShowPayment,
		showTransactionId,
		setIsShowAlert,
		setProductList,
		transactionId
	);

	const { formatterIDR } = useFormatterHook();

	return (
		<div
			className={`fixed right-0 top-0 z-[99] flex h-[100vh] duration-500 ${
				isShowPayment ? "translate-x-0" : "translate-x-[500px]"
			}`}
		>
			<div className="w-[400px] overflow-auto rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-400">
				<div className="flex items-center justify-between border-b border-slate-400 p-5">
					<p className="2xl">Payment</p>
					<i
						className="fa-solid fa-xmark cursor-pointer text-xl"
						onClick={() => setIsShowPayment(false)}
					/>
				</div>

				<form onSubmit={(e) => storeTransactionData(e)}>
					<div className="p-5">
						<div className="mb-4">
							<p className="text-lg font-medium tracking-wider text-slate-700">
								Total
							</p>
							<div className="w-full rounded-md border border-slate-400 bg-slate-200 py-1 px-2 text-slate-700">
								{formatterIDR(totalPrice) || 0}
							</div>
						</div>

						<div className="mb-4">
							<p className="text-lg font-medium tracking-wider text-slate-700">
								Discount
							</p>
							<input
								className="w-full rounded-md border border-slate-400 py-1 px-2 text-slate-700 outline-none"
								type="text"
								value={grandDiscount}
								onChange={(e) => {
									if (e.target.value === "" || regex.test(e.target.value)) {
										if (e.target.value >= 100) {
											setGrandDiscount(parseInt(100));
										} else if (e.target.value >= 0) {
											setGrandDiscount(parseInt(e.target.value || 0));
										}
									}

									if ((totalPrice * e.target.value) / 100 >= totalPrice) {
										setGrandTotalDiscount(totalPrice);
									} else {
										setGrandTotalDiscount((totalPrice * e.target.value) / 100);
									}
								}}
							/>
						</div>

						<div className="mb-4">
							<p className="text-lg font-medium tracking-wider text-slate-700">
								Total Discount
							</p>
							<input
								className="w-full rounded-md border border-slate-400 py-1 px-2 text-slate-700 outline-none"
								type="text"
								value={grandTotalDiscount}
								onChange={(e) => {
									if (e.target.value === "" || regex.test(e.target.value)) {
										if (e.target.value >= totalPrice) {
											setGrandTotalDiscount(totalPrice);
										} else {
											setGrandTotalDiscount(parseInt(e.target.value) || 0);
										}
									}

									setGrandDiscount(0);
								}}
							/>
						</div>

						<div className="mb-4">
							<p className="text-lg font-medium tracking-wider text-slate-700">
								Grand Total
							</p>
							<div className="w-full rounded-md border border-slate-400 bg-slate-200 py-1 px-2 text-slate-700">
								{formatterIDR(grandTotal || 0)}
							</div>
						</div>

						<div className="mb-4">
							<p className="text-lg font-medium tracking-wider text-slate-700">
								Pay
							</p>
							<input
								className="w-full rounded-md border border-slate-400 py-1 px-2 text-slate-700 outline-none"
								type="text"
								value={payment}
								onChange={(e) => {
									if (e.target.value === "" || regex.test(e.target.value)) {
										setPayment(parseInt(e.target.value) || 0);
									}
								}}
								onClick={() => {
									setErrorPayment("");
								}}
							/>
							{errorPayment ? (
								<div className="text-sm text-red-500">{errorPayment}</div>
							) : null}
						</div>

						<div className="mb-4">
							<p className="text-lg font-medium tracking-wider text-slate-700">
								Change Payment
							</p>
							<div className="w-full rounded-md border border-slate-400 bg-slate-200 py-1 px-2 text-slate-700">
								{formatterIDR(changePayment || 0)}
							</div>
						</div>
					</div>

					<div className="flex px-5">
						<ButtonPrimay name="Submit" type="submit" />

						<div
							className="ml-2"
							onClick={() => {
								setIsShowPayment(false);
								setChangePayment(0);
								setGrandDiscount(0);
								setPayment(0);
								setGrandTotal(totalPrice);
								setGrandTotalDiscount(0);
							}}
						>
							<ButtonSecondary name="Close" type="button" />
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default CashierPayment;
