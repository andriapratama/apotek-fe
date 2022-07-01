import { useEffect, useState } from "react";
import successIcon from "../../icon/success.png";
import dangerIcon from "../../icon/exclamation-mark.png";
import errorIcon from "../../icon/delete.png";
import { ButtonPrimayLg, ButtonSecondaryLg } from "../button";
import ModalBackground from "../modals/modal.background";
import ModalContent from "../modals/modal.content";

export const DangerAlert = ({
	id,
	deleteDataApi,
	showAllData,
	isDangerAlert,
	setIsDangerAlert,
}) => {
	const [isShowWarning, setIsShowWarning] = useState(false);
	const [isShowSuccess, setIsShowSuccess] = useState(false);
	const [isShowErrors, setIsShowErrors] = useState(false);

	useEffect(() => {
		setIsShowWarning(isDangerAlert);
	}, [isDangerAlert]);

	const handleDelete = async () => {
		try {
			await deleteDataApi(id);

			setTimeout(() => {
				setIsShowSuccess(true);
				setIsShowWarning(false);
				showAllData();
			}, 200);

			setTimeout(() => {
				setIsShowSuccess(false);
				setIsDangerAlert(false);
			}, 1500);
		} catch (error) {
			setTimeout(() => {
				setIsShowErrors(true);
				setIsShowWarning(false);
				showAllData();
			}, 200);

			setTimeout(() => {
				setIsShowErrors(false);
				setIsDangerAlert(false);
			}, 1500);
		}
	};
	return (
		<>
			<ModalBackground state={isDangerAlert}></ModalBackground>

			<ModalContent state={isShowWarning} width="w-[500px]">
				<div className="flex w-full justify-center py-[40px]">
					<img className="h-[100px] w-[100px]" src={dangerIcon} alt="danger" />
				</div>

				<div className="w-full text-center">
					<p className="text-3xl text-slate-600">Are you sure?</p>
					<p className="my-[20px] text-lg text-slate-600">
						You won't be able to revert this!
					</p>
				</div>

				<div className="flex w-full justify-center pb-[40px]">
					<div className="mr-3" onClick={() => handleDelete()}>
						<ButtonPrimayLg name="Yes, delete it!" type="submit" />
					</div>

					<div
						onClick={() => {
							setIsDangerAlert(false);
							setIsShowWarning(false);
						}}
					>
						<ButtonSecondaryLg name="Cancel" type="button" />
					</div>
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
					<p className="text-3xl text-slate-600">Deleted!</p>
					<p className="mt-[20px] mb-[40px] text-lg text-slate-600">
						Your data has been deleted.
					</p>
				</div>
			</ModalContent>

			<ModalContent state={isShowErrors} width="w-[500px]">
				<div className="flex w-full justify-center py-[40px]">
					<img className="h-[100px] w-[100px]" src={errorIcon} alt="Error" />
				</div>

				<div className="w-full text-center">
					<p className="text-3xl text-slate-600">Errors!</p>
					<p className="mt-[20px] mb-[40px] text-lg text-slate-600">
						Your data is not valid.
					</p>
				</div>
			</ModalContent>
		</>
	);
};
