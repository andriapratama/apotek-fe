import { useEffect, useState } from "react";
import successIcon from "../icon/success.png";
import dangerIcon from "../icon/exclamation-mark.png";
import errorIcon from "../icon/delete.png";
import warningIcon from "../icon/warning.png";
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
					isShowWarning
						? "scale-100 duration-300 ease-in-out"
						: "scale-0 duration-300 ease-in-out"
				}`}
			>
				<div className={`flex h-full w-full items-center justify-center`}>
					<div className="h-auto w-[500px] rounded-md border border-slate-200 bg-white ">
						<div className="flex w-full justify-center py-[40px]">
							<img
								className="h-[100px] w-[100px]"
								src={dangerIcon}
								alt="danger"
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
					isShowSuccess
						? "scale-100 duration-300 ease-in-out"
						: "scale-0 duration-300 ease-in-out"
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
					isShowErrors
						? "scale-100 duration-300 ease-in-out"
						: "scale-0 duration-300 ease-in-out"
				}`}
			>
				<div className={`flex h-full w-full items-center justify-center`}>
					<div className="h-auto w-[500px] rounded-md border border-slate-200 bg-white ">
						<div className="flex w-full justify-center py-[40px]">
							<img
								className="h-[100px] w-[100px]"
								src={errorIcon}
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
			<div
				className={`fixed inset-0 z-[9999] bg-black opacity-50 ${
					isWarningAlert ? "visible" : "invisible"
				}`}
			></div>

			<div
				className={`fixed inset-0 z-[99999] ${
					isShowWarning
						? "scale-100 duration-300 ease-in-out"
						: "scale-0 duration-300 ease-in-out"
				}`}
			>
				<div className={`flex h-screen w-full items-center justify-center`}>
					<div className="w-[500px] rounded-md border border-slate-400 bg-white">
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
					</div>
				</div>
			</div>

			<div
				className={`fixed inset-0 z-[99999] ${
					isShowSuccess
						? "scale-100 duration-300 ease-in-out"
						: "scale-0 duration-300 ease-in-out"
				}`}
			>
				<div className="flex h-screen w-full items-center justify-center">
					<div className="h-auto w-[500px] rounded-md border border-slate-400 bg-white">
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
					</div>
				</div>
			</div>
		</>
	);
};
