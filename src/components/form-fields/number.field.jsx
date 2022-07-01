import ErrorForm from "../errors/error.form";

export const NumberField = ({
	name,
	errorMessage,
	touched,
	setFieldValue,
	...props
}) => {
	const handleChange = (e) => {
		const regex = /^[0-9\b]+$/;

		if (e.target.value === "" || regex.test(e.target.value)) {
			setFieldValue(`${name}`, e.target.value);
		}
	};

	let isError = "";

	if (touched === true) {
		isError = errorMessage;
	}

	return (
		<>
			<div className="flex h-auto w-full justify-center rounded-md border border-slate-400 px-2">
				<input
					name={name}
					className="w-full py-[4px] text-slate-700 outline-none"
					type="text"
					{...props}
					autoComplete="off"
					onChange={(e) => handleChange(e)}
				/>
			</div>

			{isError ? <ErrorForm>{errorMessage}</ErrorForm> : null}
		</>
	);
};
