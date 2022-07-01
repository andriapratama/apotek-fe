import moment from "moment";
import "moment/locale/id";
import {
	ButtonPrimay,
	IconButtonDecreaseMd,
	IconButtonDeleteMd,
	IconButtonIncreaseMd,
} from "../../components/button";
import CashierProductList from "./cashier.product-list";
import { useCashierHook } from "./cashier.hook";
import { useFormatterHook } from "../../components/formatter.hook";
import CashierPayment from "./cashier-payments";
import CashierNotice from "./cashier.notice";
import TitleSection from "../../components/title-sections/title-section";
import CardContent from "../../components/cards/card.content";

function Cashier() {
	const {
		isShowProductList,
		setIsShowProductList,
		productList,
		setProductList,
		transactionList,
		setTransactionList,
		showProductDataByName,
		handleDecreaseQuantity,
		handleSetQuantity,
		handleIncreaseQuantity,
		handleDiscountSubTotal,
		handleTotalDiscountSubTotal,
		totalPrice,
		handleDeleteRowTransaction,
		isShowPayment,
		setIsShowPayment,
		handlePayment,
		errorMessage,
		setErrorMessage,
		transactionId,
		search,
		setSearch,
		showTransactionId,
		isShowAlert,
		setIsShowAlert,
	} = useCashierHook();

	const { formatterIDR } = useFormatterHook();

	return (
		<section className="cashier w-full">
			<CashierPayment
				totalPrice={totalPrice}
				isShowPayment={isShowPayment}
				setIsShowPayment={setIsShowPayment}
				transactionList={transactionList}
				setTransactionList={setTransactionList}
				setSearch={setSearch}
				showTransactionId={showTransactionId}
				setIsShowAlert={setIsShowAlert}
				setProductList={setProductList}
				transactionId={transactionId}
			/>

			<CashierNotice
				isShowAlert={isShowAlert}
				setIsShowAlert={setIsShowAlert}
				transactionId={transactionId}
			/>

			<TitleSection>Cashier</TitleSection>

			<CardContent>
				<div className="cashier-head mb-5 flex justify-between border-b-2 border-sky-500 pb-5">
					<div className="w-[48%]">
						<div className="mb-5 flex w-full items-center justify-between">
							<p className="text-slate-600">Date</p>
							<input
								className="w-[88%] rounded-lg border border-slate-400 py-1 px-2 text-slate-600"
								type="text"
								value={moment().locale("id").format("L")}
								disabled
							/>
						</div>

						<div className="flex w-full items-center justify-between">
							<p className="text-slate-600">Cashier Name</p>
							<input
								className="w-[75%] rounded-lg border border-slate-400 py-1 px-2 text-slate-600"
								type="text"
								value="Dewi"
								disabled
							/>
						</div>
					</div>
					<div className="flex w-[45%] items-end justify-end">
						<div className="flex h-full w-full items-center justify-end rounded bg-sky-500 pr-10 text-right text-7xl text-white ">
							{formatterIDR(totalPrice)}
						</div>
					</div>
				</div>

				<div className="cashier__body relative w-full">
					<div className="mb-5 flex w-full justify-end">
						<div className="flex w-[400px] rounded-md border border-slate-400">
							<input
								className="ml-2 w-[350px] border-0 py-1 text-slate-700 outline-none"
								placeholder="Search product name"
								type="text"
								value={search}
								onClick={() => setIsShowProductList(true)}
								onChange={(e) => {
									showProductDataByName(e.target.value);
									setSearch(e.target.value);
								}}
							/>
							<div className="flex w-[50px] items-center justify-center border-l-2">
								<i className="fa-solid fa-magnifying-glass text-slate-700" />
							</div>
						</div>
					</div>

					<CashierProductList
						isShowProductList={isShowProductList}
						setIsShowProductList={setIsShowProductList}
						productList={productList}
						transactionList={transactionList}
						setTransactionList={setTransactionList}
						setErrorMessage={setErrorMessage}
					/>

					{errorMessage ? (
						<div className="mb-5 w-full rounded-lg bg-red-200 py-2 text-center text-lg text-red-500">
							{errorMessage}
						</div>
					) : null}

					<table className="table">
						<thead className="text-left">
							<tr className="tr-head">
								<th>Code</th>
								<th>Name</th>
								<th className="text-center">Qty</th>
								<th>Price</th>
								<th className="text-center">Disc</th>
								<th>Total Disc</th>
								<th>Subtotal</th>
								<th className="text-center">Action</th>
							</tr>
						</thead>
						<tbody className="text-left">
							{transactionList.map((product, index) => {
								return (
									<tr className="tr-body" key={index}>
										<td className="py-2">{product.productId}</td>
										<td className="py-2">{product.name}</td>
										<td className="flex justify-center py-2">
											<div
												onClick={() => {
													handleDecreaseQuantity(index);
												}}
											>
												<IconButtonDecreaseMd />
											</div>
											<input
												className="w-10 border-slate-400 bg-slate-200 text-center outline-none"
												type="text"
												value={product.quantity}
												onChange={(e) => {
													handleSetQuantity(e, index);
												}}
											/>
											<div
												onClick={() => {
													handleIncreaseQuantity(index);
												}}
											>
												<IconButtonIncreaseMd />
											</div>
										</td>
										<td className="py-2">{formatterIDR(product.price)}</td>
										<td className="flex justify-center py-2">
											<input
												className="w-[40px] bg-slate-200 pr-2 text-right outline-none"
												type="text"
												value={product.discount}
												onChange={(e) => {
													handleDiscountSubTotal(e, index);
												}}
											/>
											<p className="bg-slate-200 pr-1">%</p>
										</td>
										<td className="py-2">
											<div className="flex">
												<p className="bg-slate-200 px-1">Rp</p>
												<input
													className="w-[80px] bg-slate-200 outline-none"
													type="text"
													value={product.totalDiscount}
													onChange={(e) => {
														handleTotalDiscountSubTotal(e, index);
													}}
												/>
											</div>
										</td>
										<td className="py-2">{formatterIDR(product.total)}</td>
										<td className="flex justify-center py-2">
											<div
												onClick={() =>
													handleDeleteRowTransaction(product.productId)
												}
											>
												<IconButtonDeleteMd />
											</div>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>

					<div className="flex w-full justify-end">
						<div onClick={() => handlePayment()}>
							<ButtonPrimay name="Payment" type="button" />
						</div>
					</div>
				</div>
			</CardContent>
		</section>
	);
}

export default Cashier;
