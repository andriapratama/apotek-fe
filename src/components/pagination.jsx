import { store } from "../stores";

export const Pagination = ({
	page,
	totalPage,
	handleSetPage,
	handleNext,
	handlePrev,
}) => {
	const pageRedux = store.getState().pagination.page;

	const rangePage = () => {
		let page = [];
		for (let i = 1; i <= totalPage; i++) {
			page.push(
				<div
					className={`flex h-8 w-8 cursor-pointer items-center justify-center border border-slate-400 text-slate-700 ${
						i === pageRedux ? "bg-slate-300" : "bg-transparent"
					}`}
					key={i}
					onClick={() => {
						handleSetPage(i);
					}}
				>
					<span>{i}</span>
				</div>
			);
		}
		return page;
	};
	return (
		<>
			{page <= 1 ? null : (
				<div
					className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-l-md border border-slate-400 text-slate-700 hover:bg-slate-200"
					onClick={() => {
						handlePrev();
					}}
				>
					<i className="fa-solid fa-angle-left text-slate-700" />
				</div>
			)}

			<div className="flex">{rangePage()}</div>

			{page >= totalPage ? null : (
				<div
					className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-r-md border border-slate-400 text-slate-700 hover:bg-slate-200"
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
