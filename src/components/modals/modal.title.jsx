const ModalTitle = ({ children }) => {
	return (
		<div className="w-full border-b border-slate-400">
			<p className="p-5 text-2xl text-slate-600">{children}</p>
		</div>
	);
};

export default ModalTitle;
