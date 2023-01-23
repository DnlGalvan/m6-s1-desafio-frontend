import { Route, Routes, Navigate } from "react-router";
import Home from "../pages/Home/home";
import Simulation from "../pages/Simulation/simulation";

const AllRoutes = () => {
	return (
		<Routes>
			<Route path="*" element={<Navigate to="/home" />} />
			<Route path="/home" element={<Home />} />
			<Route path="/simulation" element={<Simulation />} />
		</Routes>
	);
};

export default AllRoutes;
