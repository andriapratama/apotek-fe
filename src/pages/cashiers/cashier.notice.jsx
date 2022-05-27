import { ButtonPrimay, ButtonSecondary } from "../../components/button";
import iconSuccess from "../../icon/success.png";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import { CashierReport } from "./cashier-reports";
import { store } from "../../stores";
import { useFormatterHook } from "../../components/formatter.hook";

const CashierNotice = ({ isShowAlert, setIsShowAlert, transactionId }) => {
	const componentRef = useRef();
	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
	});

	const { formatterIDR } = useFormatterHook();

	const changePayment = store.getState().transactionValue.changePayment;

	return (
		<div
			className={`fixed top-0 right-0 bottom-0 left-0 z-[9999] flex justify-center duration-200 ease-in-out ${
				isShowAlert ? "scale-100" : "scale-0"
			}`}
		>
			<div className="invisible">
				<CashierReport ref={componentRef} id={transactionId} />
			</div>

			<div
				className={`absolute top-0 right-0 bottom-0 left-0 bg-black opacity-20 ${
					isShowAlert ? "visible" : "invisible"
				}`}
			></div>
			<div
				className="absolute top-[100px] z-[99] w-[400px] rounded-lg border border-slate-200 bg-white p-10 shadow-lg shadow-slate-400"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="flex w-full justify-center">
					<img
						className="mb-10 h-[100px] w-[100px]"
						src={iconSuccess}
						alt="success"
					/>
				</div>

				<div className="mb-5 w-full text-center">
					<p className="text-3xl tracking-wider text-slate-600">
						Transaction Success!
					</p>
				</div>

				<div className="mb-5 w-full text-center">
					<p className="text-slate-600">Change Payment</p>
					<p className="text-2xl text-slate-600">
						{formatterIDR(changePayment)}
					</p>
				</div>

				<div className="flex w-full justify-center">
					<div
						className="mr-5"
						onClick={() => {
							handlePrint();
							setIsShowAlert(false);
						}}
					>
						<ButtonPrimay name="Print Note" type="submit" />
					</div>

					<div
						onClick={() => {
							setIsShowAlert(false);
						}}
					>
						<ButtonSecondary name="Close" type="button" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CashierNotice;
