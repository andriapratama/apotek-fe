export const TextField = ({ errorMessage, touched, ...props }) => {
	let isError = "";

	if (touched === true) {
		isError = errorMessage;
	}

	return (
		<div className="relative">
			<div
				className={`flex h-auto w-full justify-center rounded-md border border-slate-200`}
			>
				<input
					className="w-[95%] py-1 text-slate-700 outline-none"
					type="text"
					{...props}
					autoComplete="off"
				/>
			</div>
			{isError ? (
				<div className="absolute text-xs text-red-500">{errorMessage}</div>
			) : null}
		</div>
	);
};

export const TextareaField = ({ errorMessage, touched, ...props }) => {
	let isError = "";

	if (touched === true) {
		isError = errorMessage;
	}

	return (
		<div className="relative">
			<div className="flex h-auto w-full justify-center rounded-md border border-slate-200 py-2">
				<textarea
					className="w-[95%] resize-none border-0 text-slate-700 outline-none"
					{...props}
					autoComplete="off"
				></textarea>
			</div>
			{isError ? (
				<div className="absolute text-xs text-red-500">{errorMessage}</div>
			) : null}
		</div>
	);
};
