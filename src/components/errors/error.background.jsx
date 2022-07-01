const ErrorWithBg = ({ children }) => {
	return (
		<div className="mb-5 w-full rounded-lg bg-red-200 py-2 text-center text-red-600">
			{children}
		</div>
	);
};

export default ErrorWithBg;
