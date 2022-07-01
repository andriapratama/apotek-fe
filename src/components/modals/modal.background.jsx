const ModalBackground = ({ state }) => {
	return (
		<div
			className={`fixed inset-0 z-[9999] bg-black opacity-30 ${
				state ? "visible" : "invisible"
			}`}
		></div>
	);
};

export default ModalBackground;
