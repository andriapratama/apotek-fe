function MenuComponent({ name, icon, state, setState }) {
	return (
		<div
			className="mb-1 flex h-[40px] w-full cursor-pointer items-center hover:bg-white"
			onClick={() => setState(!state)}
		>
			<div className="ml-4 w-[40px]">
				<i className={`${icon} text-slate-500`} />
			</div>

			<div className="w-[160px]">
				<span className="text-slate-500">{name}</span>
			</div>

			<div className="w-auto">
				{state ? (
					<i className="fa-solid fa-angle-down text-slate-500" />
				) : (
					<i className="fa-solid fa-angle-right text-slate-500" />
				)}
			</div>
		</div>
	);
}

export default MenuComponent;
