export const TextField = ({ errorMessage, touched, ...props }) => {
	let isError = "";

	if (touched === true) {
		isError = errorMessage;
	}

	return (
		<div className="relative">
			<div
				className={`flex h-auto w-full justify-center rounded-md border border-slate-400`}
			>
				<input
					className="w-[96%] py-[4px] text-slate-700 outline-none"
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
