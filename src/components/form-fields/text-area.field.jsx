import ErrorForm from "../errors/error.form";

export const TextareaField = ({ errorMessage, touched, ...props }) => {
	let isError = "";

	if (touched === true) {
		isError = errorMessage;
	}

	return (
		<>
			<div className="flex h-auto w-full justify-center rounded-md border border-slate-400 py-2 px-2">
				<textarea
					className="w-full resize-none border-0 text-slate-700 outline-none"
					{...props}
					autoComplete="off"
					autoCorrect="off"
				></textarea>
			</div>
			{isError ? <ErrorForm>{errorMessage}</ErrorForm> : null}
		</>
	);
};
