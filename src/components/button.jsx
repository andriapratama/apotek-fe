export const ButtonPrimay = ({ name, ...props }) => {
	return (
		<button
			className="cursor-pointer rounded-md bg-sky-500 px-4 py-[5px] text-sm text-white hover:opacity-80"
			{...props}
		>
			{name}
		</button>
	);
};

export const ButtonPrimayLg = ({ name, ...props }) => {
	return (
		<button
			className="cursor-pointer rounded-md bg-sky-500 px-6 py-[10px] tracking-wider text-white hover:opacity-80"
			{...props}
		>
			{name}
		</button>
	);
};

export const ButtonSecondary = ({ name, ...props }) => {
	return (
		<button
			className="cursor-pointer rounded-md bg-slate-500 px-4 py-[5px] text-sm text-white hover:opacity-80"
			{...props}
		>
			{name}
		</button>
	);
};

export const ButtonSecondaryLg = ({ name, ...props }) => {
	return (
		<button
			className="cursor-pointer rounded-md bg-slate-500 px-6 py-[10px] tracking-wider text-white hover:opacity-80"
			{...props}
		>
			{name}
		</button>
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
