import { useState, useEffect } from "react";

export const CustomSelectField = ({
	name,
	placeholder,
	errorMessage,
	touched,
	setFieldValue,
	listData,
	handleSearch,
	...props
}) => {
	const [showOption, setShowOption] = useState(false);
	const [selectValue, setSelectValue] = useState("");

	useEffect(() => {
		setFieldValue(`${name}`, selectValue);
	}, [selectValue, name, setFieldValue]);

	let isError = "";

	if (touched === true) {
		isError = errorMessage;
	}

	return (
		<div className="relative">
			<div className="flex h-auto w-full cursor-pointer justify-center rounded-md border border-slate-400">
				<div
					className="flex w-[97%] items-center justify-between py-[4px] text-slate-600"
					{...props}
					onClick={() => setShowOption(!showOption)}
				>
					<div className="capitalize">{selectValue || placeholder}</div>
					<i className="fa-solid fa-angle-down text-sm" />
				</div>
				{showOption ? (
					<>
						<div
							className="fixed top-0 left-0 bottom-0 right-0 z-[9999] cursor-default"
							onClick={() => setShowOption(false)}
						></div>
						<div
							className="absolute z-[9999] mb-1 h-auto w-full rounded-lg border border-slate-400 bg-white shadow-lg shadow-slate-400"
							onClick={(e) => e.stopPropagation()}
						>
							<div className="my-2 mx-2 px-2">
								<input
									name={`${name}`}
									className="w-full rounded-lg border border-slate-400 py-1 px-2"
									type="text"
									placeholder="search"
									autoComplete="off"
									onChange={(e) => handleSearch(e.target.value)}
								/>
							</div>

							{listData.map((value, index) => {
								return (
									<div
										className="mx-1 mb-2 cursor-pointer rounded-lg py-1 px-2 capitalize hover:bg-slate-300"
										onClick={() => {
											setSelectValue(value.name);
											setShowOption(false);
										}}
										key={index}
									>
										{value.name}
									</div>
								);
							})}
						</div>
					</>
				) : null}
			</div>
			{isError ? (
				<div className="absolute text-xs text-red-500">{errorMessage}</div>
			) : null}
		</div>
	);
};
