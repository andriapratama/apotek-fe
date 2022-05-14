export const Pagination = ({ page, totalPage, handleNext, handlePrev }) => {
	return (
		<>
			{page <= 1 ? null : (
				<div
					className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-l-md border text-slate-700 hover:bg-slate-200"
					onClick={() => {
						handlePrev();
					}}
				>
					<i className="fa-solid fa-angle-left text-slate-700" />
				</div>
			)}

			<div className="flex h-8 w-8 items-center justify-center border text-slate-700">
				<span>{page}</span>
			</div>

			{page >= totalPage ? null : (
				<div
					className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-r-md border text-slate-700 hover:bg-slate-200"
					onClick={() => {
						handleNext();
					}}
				>
					<i className="fa-solid fa-angle-right text-slate-700" />
				</div>
			)}
		</>
	);
};
