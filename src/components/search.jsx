export const SearchFeature = (...props) => {
	return (
		<div className="mb-5 flex w-[350px] rounded-md border border-slate-400">
			<input
				className="ml-2 w-[300px] border-0 py-1 text-slate-700 outline-none"
				type="text"
				{...props}
			/>
			<div className="flex w-[50px] items-center justify-center border-l-2">
				<i className="fa-solid fa-magnifying-glass text-slate-700" />
			</div>
		</div>
	);
};
