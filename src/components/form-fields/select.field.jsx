import { useEffect, useState } from "react";
import ErrorForm from "../errors/error.form";

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
		<>
			<select
				className="text-sate-700 w-full rounded-md border border-slate-400 py-[5px] px-2 capitalize outline-none"
				{...props}
			>
				<option value="" hidden>
					{placeholder}
				</option>
				{options}
			</select>

			{isError ? <ErrorForm>{errorMessage}</ErrorForm> : null}
		</>
	);
};
