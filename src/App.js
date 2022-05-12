import { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebars/sidebar";
import Role from "./pages/master-data/roles";

function App() {
	const [isShowSidebar, setIsShowSidebar] = useState(false);

	return (
		<div className="App bg-slate-100">
			<Navbar
				setIsShowSidebar={setIsShowSidebar}
				isShowSidebar={isShowSidebar}
			/>

			<BrowserRouter>
				<div className="relative flex">
					<Sidebar isShowSidebar={isShowSidebar} />

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
							</Routes>
						</div>
					</div>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
