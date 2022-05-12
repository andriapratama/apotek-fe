import { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebars/sidebar";

function App() {
	const [isShowSidebar, setIsShowSidebar] = useState(false);

	return (
		<div className="App">
			<Navbar
				setIsShowSidebar={setIsShowSidebar}
				isShowSidebar={isShowSidebar}
			/>

			<div className="relative flex">
				<Sidebar isShowSidebar={isShowSidebar} />

				<div
					className={`absolute right-0 flex justify-center ${
						isShowSidebar
							? "w-full duration-300 ease-in-out"
							: "w-10/12 duration-300 ease-in-out"
					}`}
				>
					<BrowserRouter>
						<Routes>
							<Route />
						</Routes>
					</BrowserRouter>
				</div>
			</div>
		</div>
	);
}

export default App;
