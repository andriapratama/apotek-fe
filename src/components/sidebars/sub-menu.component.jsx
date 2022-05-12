function SubmenuComponent({ name, icon }) {
	return (
		<div className="mb-1 flex h-[40px] w-full cursor-pointer items-center hover:bg-white">
			<div className="ml-8 w-[40px]">
				<i className={`${icon} text-slate-500`} />
			</div>

			<div className="w-[160px]">
				<span className="text-slate-500">{name}</span>
			</div>
		</div>
	);
}

export default SubmenuComponent;
