import { useEffect, useState } from "react";

export const SelectField = ({
	errorMessage,
	touched,
	placeholder,
	options,
	...props
}) => {
	const [isError, setIsError] = useState("");

	useEffect(() => {
		if (touched === true) {
			setIsError(errorMessage);
		}
	}, [touched, errorMessage]);

	return (
		<div className="relative">
			<select
				className="text-sate-700 w-full rounded-md border border-slate-400 py-[5px] px-2 capitalize outline-none"
				{...props}
			>
				<option value="" hidden>
					{placeholder}
				</option>
				{options}
			</select>
			{isError ? (
				<div className="absolute text-xs text-red-500">{errorMessage}</div>
			) : null}
		</div>
	);
};
