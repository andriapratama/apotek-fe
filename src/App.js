import { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebars/sidebar";
import Role from "./pages/master-data/roles";
import Category from "./pages/master-data/categories";
import Type from "./pages/master-data/types";
import Group from "./pages/master-data/groups";
import Brand from "./pages/master-data/brands";
import Unit from "./pages/master-data/units";
import Location from "./pages/master-data/locations";
import SupplierList from "./pages/suppliers";
import ProductList from "./pages/products";
import ProductCreate from "./pages/products/product.create";
import Testing from "./pages/products/testing";

function App() {
	const [isShowSidebar, setIsShowSidebar] = useState(false);

	return (
		<div className="App relative">
			<Navbar
				setIsShowSidebar={setIsShowSidebar}
				isShowSidebar={isShowSidebar}
			/>

			<BrowserRouter>
				<div className="relative top-[60px]">
					<div className="fixed w-2/12">
						<Sidebar isShowSidebar={isShowSidebar} />
					</div>

					<div
						className={`absolute right-0 flex justify-center bg-slate-100 ${
							isShowSidebar
								? "w-full duration-300 ease-in-out"
								: "w-10/12 duration-300 ease-in-out"
						}`}
					>
						<div className="mt-8 flex w-[95%] justify-center">
							<Routes>
								<Route path="/master-data/role" element={<Role />} />
								<Route path="/master-data/category" element={<Category />} />
								<Route path="/master-data/type" element={<Type />} />
								<Route path="/master-data/group" element={<Group />} />
								<Route path="/master-data/brand" element={<Brand />} />
								<Route path="/master-data/unit" element={<Unit />} />
								<Route path="/master-data/location" element={<Location />} />

								<Route
									path="/supplier/supplier-list"
									element={<SupplierList />}
								/>

								<Route path="/product/product-list" element={<ProductList />} />
								<Route
									path="/product/product-create"
									element={<ProductCreate />}
								/>
								<Route path="/product/testing" element={<Testing />} />
							</Routes>
						</div>
					</div>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
