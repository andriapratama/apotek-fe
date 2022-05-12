import { useState } from "react";
import MenuComponent from "./menu.component";
import SubmenuComponent from "./sub-menu.component";

function Sidebar({ isShowSidebar }) {
	const [isShowMasterData, setIsShowMasterData] = useState(false);
	return (
		<section
			className={`h-[100vh] w-2/12 bg-slate-200 ${
				isShowSidebar
					? "absolute -translate-x-[300px] duration-300 ease-in-out"
					: "relative translate-x-0 duration-300 ease-in-out"
			}`}
		>
			<div className="sidebar__body w-full">
				<div className="mt-10">
					<div className="master-data relative">
						<MenuComponent
							name="Master Data"
							icon="fa-solid fa-database"
							state={isShowMasterData}
							setState={setIsShowMasterData}
						/>

						<div
							className={
								isShowMasterData ? "visible relative" : "invisible absolute"
							}
						>
							<SubmenuComponent
								name="Role"
								icon="fa-solid fa-shapes"
								link="/role"
							/>
							<SubmenuComponent
								name="Kategori obat"
								icon="fa-solid fa-shapes"
								link="/category"
							/>
							<SubmenuComponent name="Jenis obat" icon="fa-solid fa-shapes" />
							<SubmenuComponent
								name="Golongan obat"
								icon="fa-solid fa-shapes"
							/>
							<SubmenuComponent name="Merk obat" icon="fa-solid fa-shapes" />
							<SubmenuComponent name="Satuan obat" icon="fa-solid fa-shapes" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Sidebar;
