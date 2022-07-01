import successIcon from "../../icon/success.png";
import ModalBackground from "../modals/modal.background";
import ModalContent from "../modals/modal.content";

export const SuccessAlert = ({ isSuccessAlert, text }) => {
	return (
		<>
			<ModalBackground state={isSuccessAlert}></ModalBackground>

			<ModalContent state={isSuccessAlert} width="w-[500px]">
				<div className="flex w-full justify-center py-[40px]">
					<img
						className="h-[100px] w-[100px]"
						src={successIcon}
						alt="success"
					/>
				</div>

				<div className="w-full text-center">
					<p className="text-3xl text-slate-600">Deleted!</p>
					<p className="mt-[20px] mb-[40px] text-lg text-slate-600">{text}</p>
				</div>
			</ModalContent>
		</>
	);
};
