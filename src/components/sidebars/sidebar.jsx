import { useState } from "react";
import MenuComponent from "./menu.component";
import SubmenuComponent from "./sub-menu.component";

function Sidebar({ isShowSidebar }) {
	const [isShowMasterData, setIsShowMasterData] = useState(false);
	const [isShowProduct, setIsShowProduct] = useState(false);
	const [isShowSupplier, setIsShowSupplier] = useState(false);

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
								link="/role"
							/>

							<SubmenuComponent
								name="Kategori obat"
								icon="fa-solid fa-shapes"
								link="/category"
							/>

							<SubmenuComponent
								name="Jenis obat"
								icon="fa-solid fa-shapes"
								link="/type"
							/>

							<SubmenuComponent
								name="Golongan obat"
								icon="fa-solid fa-shapes"
								link="/group"
							/>

							<SubmenuComponent
								name="Merk obat"
								icon="fa-solid fa-shapes"
								link="/brand"
							/>

							<SubmenuComponent
								name="Satuan obat"
								icon="fa-solid fa-shapes"
								link="/unit"
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

					<div className="product relative">
						<MenuComponent
							name="Supplier"
							icon="fa-solid fa-shop"
							state={isShowSupplier}
							setState={setIsShowSupplier}
						/>
						<div
							className={
								isShowSupplier ? "visible relative" : "invisible absolute"
							}
						>
							<SubmenuComponent
								name="Supplier List"
								icon="fa-solid fa-list"
								link="/supplier/supplier-list"
							/>

							<SubmenuComponent
								name="Add Supplier"
								icon="fa-solid fa-plus"
								link="/supplier/add-supplier"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Sidebar;
