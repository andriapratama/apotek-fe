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
import AddProduct from "./pages/products/add-products";
import ProductList from "./pages/products/product-lists";
import StockOpname from "./pages/products/stock-opnames";
import SupplierList from "./pages/suppliers";

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
								<Route path="/role" element={<Role />} />
								<Route path="/category" element={<Category />} />
								<Route path="/type" element={<Type />} />
								<Route path="/group" element={<Group />} />
								<Route path="/brand" element={<Brand />} />
								<Route path="/unit" element={<Unit />} />
								<Route path="/product/add-product" element={<AddProduct />} />
								<Route path="/product/product-list" element={<ProductList />} />
								<Route path="/product/stock-opname" element={<StockOpname />} />
								<Route
									path="/supplier/supplier-list"
									element={<SupplierList />}
								/>
							</Routes>
						</div>
					</div>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
