import ErrorForm from "../errors/error.form";

export const TextField = ({ errorMessage, touched, ...props }) => {
	let isError = "";

	if (touched === true) {
		isError = errorMessage;
	}

	return (
		<>
			<div className="flex h-auto w-full justify-center rounded-md border border-slate-400 px-2">
				<input
					className="w-full py-[4px] text-slate-700 outline-none"
					type="text"
					{...props}
					autoComplete="off"
				/>
			</div>
			{isError ? <ErrorForm>{errorMessage}</ErrorForm> : null}
		</>
	);
};
