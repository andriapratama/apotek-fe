import { useEffect, useState } from "react";
import successIcon from "../icon/success.png";
import warningIcon from "../icon/exclamation-mark.png";
import ErrorIcon from "../icon/delete.png";
import { ButtonPrimayLg, ButtonSecondaryLg } from "./button";

export const DangerAlert = ({
	id,
	deleteDataApi,
	showAllData,
	isDangerAlert,
	setIsDangerAlert,
}) => {
	const [isShowWarning, setIsShowWarning] = useState(isDangerAlert);
	const [isShowSuccess, setIsShowSuccess] = useState(false);
	const [isShowErrors, setIsShowErrors] = useState(false);

	useEffect(() => {
		setIsShowWarning(isDangerAlert);
		// eslint-disable-next-line
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
			<div
				className={`fixed top-0 left-0 bottom-0 right-0 bg-slate-500 opacity-70 ${
					isDangerAlert ? "visible z-[9999]" : "invisible -z-10"
				}`}
			></div>

			<div
				className={`fixed top-0 left-0 bottom-0 right-0 z-[99999] ${
					isShowWarning ? "visible" : "invisible"
				}`}
			>
				<div className={`flex h-full w-full items-center justify-center`}>
					<div className="h-auto w-[500px] rounded-md border border-slate-200 bg-white ">
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
					</div>
				</div>
			</div>
			<div
				className={`fixed top-0 left-0 bottom-0 right-0 z-[99999] ${
					isShowSuccess ? "visible" : "invisible"
				}`}
			>
				<div className={`flex h-full w-full items-center justify-center`}>
					<div className="h-auto w-[500px] rounded-md border border-slate-200 bg-white ">
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
					</div>
				</div>
			</div>

			<div
				className={`fixed top-0 left-0 bottom-0 right-0 z-[99999] ${
					isShowErrors ? "visible" : "invisible"
				}`}
			>
				<div className={`flex h-full w-full items-center justify-center`}>
					<div className="h-auto w-[500px] rounded-md border border-slate-200 bg-white ">
						<div className="flex w-full justify-center py-[40px]">
							<img
								className="h-[100px] w-[100px]"
								src={ErrorIcon}
								alt="Error"
							/>
						</div>

						<div className="w-full text-center">
							<p className="text-3xl text-slate-600">Errors!</p>
							<p className="mt-[20px] mb-[40px] text-lg text-slate-600">
								Your data is not valid.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
