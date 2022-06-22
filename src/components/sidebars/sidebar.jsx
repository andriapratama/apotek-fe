import { useState } from "react";
import MenuComponent from "./menu.component";
import MenuDropdownComponent from "./menu-dropdown.component";
import SubmenuComponent from "./sub-menu.component";

function Sidebar({ isShowSidebar }) {
	const [isShowMasterData, setIsShowMasterData] = useState(false);

	return (
		<section
			className={`h-[93vh] overflow-scroll bg-slate-200 ${
				isShowSidebar
					? "absolute -translate-x-[300px] duration-300 ease-in-out"
					: "relative translate-x-0 duration-300 ease-in-out"
			}`}
		>
			<div className="sidebar__body w-full">
				<div className="mt-10">
					<div className="master-data relative">
						<MenuDropdownComponent
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
								link="/master-data/role"
							/>

							<SubmenuComponent
								name="Kategori obat"
								icon="fa-solid fa-shapes"
								link="/master-data/category"
							/>

							<SubmenuComponent
								name="Jenis obat"
								icon="fa-solid fa-shapes"
								link="/master-data/type"
							/>

							<SubmenuComponent
								name="Golongan obat"
								icon="fa-solid fa-shapes"
								link="/master-data/group"
							/>

							<SubmenuComponent
								name="Merk obat"
								icon="fa-solid fa-shapes"
								link="/master-data/brand"
							/>

							<SubmenuComponent
								name="Satuan obat"
								icon="fa-solid fa-shapes"
								link="/master-data/unit"
							/>

							<SubmenuComponent
								name="Lokasi"
								icon="fa-solid fa-shapes"
								link="/master-data/location"
							/>
						</div>
					</div>

					<MenuComponent
						name="Product"
						icon="fa-solid fa-capsules"
						link="/product/list"
					/>

					<MenuComponent
						name="Supplier"
						icon="fa-solid fa-shop"
						link="/supplier/list"
					/>

					<MenuComponent
						name="Transaction"
						icon="fa-solid fa-receipt ml-1"
						link="/transaction/list"
					/>

					<MenuComponent
						name="Cashier"
						icon="fa-solid fa-cart-shopping"
						link="/cashier"
					/>

					<MenuComponent
						name="Incoming Product"
						icon="fa-solid fa-kit-medical"
						link="/incoming-product/list"
					/>
				</div>
			</div>
		</section>
	);
}

export default Sidebar;
