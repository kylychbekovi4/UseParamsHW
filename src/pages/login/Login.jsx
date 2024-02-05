import scss from "./Login.module.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const url = import.meta.env.VITE_BACKEND_URL;

const Login = () => {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");

	// ! Login page
	// ! Логика
	const navigate = useNavigate();
	const handleNavigate = async () => {
		if (userName === "" || password === "") {
			alert("Заполнить пустые места");
		} else {
			const response = await axios.get(url);
			const responseData = response.data;

			const findUser = responseData.find(
				(item) => item.title === userName && item.password === password
			);

			if (findUser) {
				localStorage.setItem("isAuth", "" + findUser._id);
				console.log("Found", findUser);
				navigate("/home");
			} else {
				alert("Неверный логин или пароль");
			}
		}
	};
	// !

	const handleRegir = () => {
		navigate("/main");
	};

	return (
		// ! Анимация логотип Инстаграма
		<div className={scss.Main}>
			<div className="container">
				<div className={scss.parent}>
					<div className={scss.papa}>
						<div className={scss.tooltip_container}>
							<div className={scss.tooltip}>
								<div className={scss.profile}>
									<div className={scss.user}>
										<div className={scss.img}>
											<img
												className={scss.iiimg}
												src="https://ca.slack-edge.com/T023L1WBFLH-U05UQJGJJ2E-f93ef9e58d84-512"
												alt=""
											/>
										</div>
										<div className={scss.details}>
											<div className={scss.name}>User:</div>
											<div className={scss.username}>@kylychbekovi4</div>
										</div>
									</div>
									<div className={scss.about}>50+ Followers</div>
								</div>
							</div>
							<div className={scss.text}>
								<a className={scss.icon} href="#">
									<div className={scss.layer}>
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										<span className={scss.instagramSVG}>
											<svg
												fill="white"
												className={scss.svgIcon}
												viewBox="0 0 448 512"
												height="1.5em"
												xmlns="http://www.w3.org/2000/svg">
												<path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
											</svg>
										</span>
									</div>
									<div className={scss.text}>Instagram</div>
								</a>
							</div>
							{/* //! Анимация логотип Инстаграма end */}
							<div>
								<h2>LOGIN</h2>
							</div>
						</div>
					</div>
					<div className={scss.inputs}>
						<input
							type="text"
							value={userName}
							onChange={(e) => setUserName(e.target.value)}
							placeholder="Имя пользователя "
						/>
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Пароль"
						/>
						<div className={scss.button}>
							<button onClick={handleNavigate}>Войти</button>
						</div>
						<div className={scss.button_regis}>
							<button onClick={handleRegir}>Regis</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
