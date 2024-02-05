import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Parent from "./pages/parent/Parent";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const App = () => {
	const navigate = useNavigate();
	let { pathname } = useLocation();

	const isAuth = localStorage.getItem("isAuth");

	useEffect(() => {
		if (!!isAuth && pathname === "/login") {
			navigate("/home");
		} else if (!isAuth && pathname === "/home") {
			navigate("/login");
		}
	}, [pathname]);

	return (
		<>
			<Routes>
				<Route path="/" element={<Parent />} />
				<Route path="/home" element={<Home />} />
				<Route path="/main" element={<Main />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</>
	);
};

export default App;
