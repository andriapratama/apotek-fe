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

export const IconButtonEditSm = () => {
	return (
		<div className="mr-1 flex h-5 w-5 cursor-pointer items-center justify-center rounded-md bg-slate-500 text-white">
			<i className="fa-solid fa-pencil text-xs" />
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

export const IconButtonDeleteMd = () => {
	return (
		<div className="mr-1 flex h-6 w-6 cursor-pointer items-center justify-center rounded-md bg-red-500 text-white">
			<i className="fa-regular fa-trash-can text-xs" />
		</div>
	);
};

export const IconButtonDeleteSm = () => {
	return (
		<div className="mr-1 flex h-5 w-5 cursor-pointer items-center justify-center rounded-md bg-red-500 text-white">
			<i className="fa-regular fa-trash-can text-xs" />
		</div>
	);
};

export const IconButtonDetail = () => {
	return (
		<div className="mx-1 flex h-7 w-7 cursor-pointer items-center justify-center rounded-sm bg-sky-500 text-white">
			<i className="fa-regular fa-eye" />
		</div>
	);
};

export const IconButtonDetailSm = () => {
	return (
		<div className="mr-1 flex h-5 w-5 cursor-pointer items-center justify-center rounded-md bg-sky-500 text-white">
			<i className="fa-regular fa-eye text-xs" />
		</div>
	);
};

export const IconButtonDecreaseMd = () => {
	return (
		<div className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-md bg-sky-500 text-white">
			<i className="fa-solid fa-minus text-xs" />
		</div>
	);
};

export const IconButtonIncreaseMd = () => {
	return (
		<div className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-md bg-sky-500 text-white">
			<i className="fa-solid fa-plus text-xs" />
		</div>
	);
};

export const IconButtonAddMd = () => {
	return (
		<div className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-md bg-green-500 text-white">
			<i className="fa-solid fa-plus text-xs" />
		</div>
	);
};
