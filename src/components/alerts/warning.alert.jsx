import { useEffect, useState } from "react";
import successIcon from "../../icon/success.png";
import warningIcon from "../../icon/warning.png";
import { ButtonPrimayLg, ButtonSecondaryLg } from "../button";
import ModalBackground from "../modals/modal.background";
import ModalContent from "../modals/modal.content";

export const WarningAlert = ({
	isWarningAlert,
	setIsWarningAlert,
	storeData,
}) => {
	const [isShowWarning, setIsShowWarning] = useState(false);
	const [isShowSuccess, setIsShowSuccess] = useState(false);

	useEffect(() => {
		setIsShowWarning(isWarningAlert);
	}, [isWarningAlert]);

	const handleSubmit = () => {
		storeData();

		setTimeout(() => {
			setIsShowSuccess(true);
			setIsShowWarning(false);
		}, 200);

		setTimeout(() => {
			setIsShowSuccess(false);
			setIsWarningAlert(false);
		}, 1500);
	};

	return (
		<>
			<ModalBackground state={isWarningAlert}></ModalBackground>

			<ModalContent state={isShowWarning} width="w-[500px]">
				<div className="flex w-full justify-center py-[40px]">
					<img
						className="h-[100px] w-[100px]"
						src={warningIcon}
						alt="warning"
					/>
				</div>

				<div className="w-full text-center">
					<p className="text-3xl text-slate-600">Are you sure?</p>
					<p className="my-[20px] text-lg text-slate-600">
						You won't be able to change this!
					</p>
				</div>

				<div className="mb-[40px] flex w-full justify-center">
					<div className="mr-3">
						<ButtonPrimayLg
							name="Yes, save it!"
							type="button"
							onClick={() => {
								handleSubmit();
							}}
						/>
					</div>

					<ButtonSecondaryLg
						name="Cancel"
						type="button"
						onClick={() => {
							setIsShowWarning(false);
							setIsWarningAlert(false);
						}}
					/>
				</div>
			</ModalContent>

			<ModalContent state={isShowSuccess} width="w-[500px]">
				<div className="flex w-full justify-center py-[40px]">
					<img
						className="h-[100px] w-[100px]"
						src={successIcon}
						alt="success"
					/>
				</div>

				<div className="w-full text-center">
					<p className="text-3xl text-slate-600">Success!</p>
					<p className="mt-[20px] mb-[40px] text-lg text-slate-600">
						Your data has been saved.
					</p>
				</div>
			</ModalContent>
		</>
	);
};
