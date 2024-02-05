import scss from "./Parent.module.scss";
import { useNavigate } from "react-router-dom";

const Parent = () => {
	const navigate = useNavigate();
	const handleLogin = () => {
		navigate("/login");
	};

	return (
		<div className={scss.Parent}>
			<div className={scss.parent}>
				<p>Instagram</p>
			</div>
			<div className={scss.father}>
				<div className={scss.loader}>
					<div className={scss.container}>
						<div className={scss.carousel}>
							<div className={scss.love}></div>
							<div className={scss.love}></div>
							<div className={scss.love}></div>
							<div className={scss.love}></div>
							<div className={scss.love}></div>
							<div className={scss.love}></div>
							<div className={scss.love}></div>
						</div>
					</div>
					<div className={scss.container}>
						<div className={scss.carousel}>
							<div className={scss.death}></div>
							<div className={scss.death}></div>
							<div className={scss.death}></div>
							<div className={scss.death}></div>
							<div className={scss.death}></div>
							<div className={scss.death}></div>
							<div className={scss.death}></div>
						</div>
					</div>
					<div className={scss.container}>
						<div className={scss.carousel}>
							<div className={scss.robots}></div>
							<div className={scss.robots}></div>
							<div className={scss.robots}></div>
							<div className={scss.robots}></div>
							<div className={scss.robots}></div>
							<div className={scss.robots}></div>
							<div className={scss.robots}></div>
						</div>
					</div>
				</div>
			</div>

			<div className={scss.papa}>
				<div className={scss.img}>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/800px-Instagram_logo_2022.svg.png"
						alt=""
					/>
				</div>
				<div className={scss.button}>
					<button onClick={handleLogin}>Login</button>
				</div>
			</div>
		</div>
	);
};

export default Parent;