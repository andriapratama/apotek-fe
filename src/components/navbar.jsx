import profil from "../img/photo-1622548331053-105252394.jpeg";

function Navbar({ setIsShowSidebar, isShowSidebar }) {
	return (
		<nav className="fixed z-50 flex h-[60px] w-full items-center justify-between border-b border-slate-200 bg-white shadow-md shadow-slate-100">
			<div className="ml-5 flex h-full items-center text-2xl">
				<div
					className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full hover:bg-slate-200"
					onClick={() => setIsShowSidebar(!isShowSidebar)}
				>
					<i className="fa-solid fa-bars text-slate-500" />
				</div>

				<div className="ml-5">
					<span className="text-2xl tracking-wider text-slate-500">Apotek</span>
				</div>
			</div>

			<div className="mr-5">
				<div className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full">
					<img
						className="h-full w-full rounded-full object-cover object-center"
						src={profil}
						alt="profil"
					/>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
