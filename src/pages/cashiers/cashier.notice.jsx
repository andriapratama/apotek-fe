import { ButtonPrimay, ButtonSecondary } from "../../components/button";
import iconSuccess from "../../icon/success.png";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import { CashierReport } from "./cashier-reports";
import { store } from "../../stores";
import { useFormatterHook } from "../../components/formatter.hook";
import ModalBackground from "../../components/modals/modal.background";
import ModalContent from "../../components/modals/modal.content";

const CashierNotice = ({ isShowAlert, setIsShowAlert, transactionId }) => {
	const componentRef = useRef();
	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
	});

	const { formatterIDR } = useFormatterHook();

	const changePayment = store.getState().transactionValue.changePayment;

	return (
		<>
			<div className="invisible">
				<CashierReport ref={componentRef} id={transactionId} />
			</div>

			<ModalBackground state={isShowAlert}></ModalBackground>

			<ModalContent state={isShowAlert} width="w-[400px]">
				<div className="flex w-full justify-center pt-5">
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

				<div className="flex w-full justify-center pb-5">
					<div className="mr-5">
						<ButtonPrimay
							name="Print Note"
							type="submit"
							onClick={() => {
								handlePrint();
								setIsShowAlert(false);
							}}
						/>
					</div>

					<ButtonSecondary
						name="Close"
						type="button"
						onClick={() => {
							setIsShowAlert(false);
						}}
					/>
				</div>
			</ModalContent>
		</>
	);
};

export default CashierNotice;
