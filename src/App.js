import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./components/navbar";

function App() {
	return (
		<div className="App">
			<Navbar />

			<BrowserRouter>
				<Routes>
					<Route />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
