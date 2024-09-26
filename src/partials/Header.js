import React from "react";
import {useNavigate} from "react-router-dom";

const Header = () => {
	let navigate = useNavigate();

	const goToHomepage = () =>{
		let path_home = `/`;
		navigate(path_home);
	}
	const goToAbout= () =>{
		let path_about = `/about_us`;
		navigate(path_about);
	}

	return (
		<div className="container">
			<header className="d-flex justify-content-between align-items-center">
				<p className="fw-bold mx-md-5 mx-3" style={{ fontSize: "3vw", color: "darkorange" }}>
					E16
				</p>
				<ul className="nav nav-pills align-items-center fw-bolder text-dark">
					<button className="fw-bold nav-item nav-link mx-md-3 mx-2" onClick={goToHomepage} style={{ color: "darkblue" }}>
						Home
					</button>
					<button className="fw-bold nav-item nav-link mx-md-3 mx-2" onClick={goToAbout} style={{ color: "darkblue" }}>
						About Us
					</button>
				</ul>
			</header>
		</div>
	);
}

export default Header;