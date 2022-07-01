export const TextareaField = ({ errorMessage, touched, ...props }) => {
	let isError = "";

	if (touched === true) {
		isError = errorMessage;
	}

	return (
		<div className="relative">
			<div className="flex h-auto w-full justify-center rounded-md border border-slate-400 py-2">
				<textarea
					className="w-[95%] resize-none border-0 text-slate-700 outline-none"
					{...props}
					autoComplete="off"
					autoCorrect="off"
				></textarea>
			</div>
			{isError ? (
				<div className="absolute text-xs text-red-500">{errorMessage}</div>
			) : null}
		</div>
	);
};
