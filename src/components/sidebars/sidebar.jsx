import { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuComponent from "./menu.component";
import SubmenuComponent from "./sub-menu.component";

function Sidebar({ isShowSidebar }) {
	const [isShowMasterData, setIsShowMasterData] = useState(false);
	const [isShowProduct, setIsShowProduct] = useState(false);

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

					<div className="product relative">
						<MenuComponent
							name="Product"
							icon="fa-solid fa-capsules"
							state={isShowProduct}
							setState={setIsShowProduct}
						/>
						<div
							className={
								isShowProduct ? "visible relative" : "invisible absolute"
							}
						>
							<SubmenuComponent
								name="Product List"
								icon="fa-solid fa-list"
								link="/product/product-list"
							/>

							<SubmenuComponent
								name="Add Product"
								icon="fa-solid fa-plus"
								link="/product/add-product"
							/>

							<SubmenuComponent
								name="Stock Opname"
								icon="fa-solid fa-gear"
								link="/product/stock-opname"
							/>
						</div>
					</div>

					<div className="supplier relative">
						<NavLink
							to="/supplier/supplier-list"
							className={({ isActive }) =>
								`mb-1 flex h-[40px] w-full cursor-pointer items-center hover:bg-white ${
									isActive ? "bg-white" : "bg-transparent"
								}`
							}
						>
							<div className="ml-4 w-[40px]">
								<i className={`fa-solid fa-shop text-slate-500`} />
							</div>

							<div className="w-[160px]">
								<span className="text-slate-500">Supplier</span>
							</div>
						</NavLink>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Sidebar;
