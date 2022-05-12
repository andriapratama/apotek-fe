export const TextField = ({ ...props }) => {
	return (
		<div className="flex w-full justify-center rounded-md border">
			<input
				className="w-[95%] py-1 text-slate-700 outline-none"
				type="text"
				{...props}
				autoComplete="off"
			/>
		</div>
	);
};
