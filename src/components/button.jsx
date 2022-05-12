export const ButtonPrimay = ({ name }) => {
	return (
		<div className="cursor-pointer rounded-md bg-sky-500 px-4 py-[5px] text-sm text-white hover:opacity-80">
			{name}
		</div>
	);
};

export const IconButtonEdit = () => {
	return (
		<div className="mx-1 flex h-7 w-7 cursor-pointer items-center justify-center rounded-sm bg-slate-500 text-white">
			<i className="fa-solid fa-pencil" />
		</div>
	);
};

export const IconButtonDelete = () => {
	return (
		<div className="mx-1 flex h-7 w-7 cursor-pointer items-center justify-center rounded-sm bg-red-500 text-white">
			<i className="fa-regular fa-trash-can" />
		</div>
	);
};
