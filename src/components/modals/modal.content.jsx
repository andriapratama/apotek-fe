const ModalContent = ({ state, width, children }) => {
	const className = () => {
		let newClassName =
			"rounded-md border border-slate-400 bg-white shadow-lg shadow-slate-600";

		if (!width) {
			return null;
		} else {
			newClassName = newClassName + " " + width;
		}

		return newClassName;
	};

	return (
		<div
			className={`fixed inset-0 z-[99999] ${
				state
					? "scale-100 duration-300 ease-in-out"
					: "scale-0 duration-300 ease-in-out"
			}`}
		>
			<div className="flex h-screen w-full items-center justify-center">
				<div className={className()}>{children}</div>
			</div>
		</div>
	);
};

export default ModalContent;
