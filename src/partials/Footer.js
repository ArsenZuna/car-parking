import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
	return (
		<footer className="footer mt-auto py-3 bg-light">
			<div className="container d-flex flex-column flex-md-row justify-content-between">
				{/* Logo */}
				<div className="align-self-center mb-3 mb-md-0 text-center text-md-start">
					<h1 className="fw-bold" style={{ fontSize: "3vw", color: "darkorange" }}>
						E16
					</h1>
				</div>

				{/* Additional Links and Social Icons */}
				<div className="d-flex flex-column flex-md-row align-items-center text-center text-md-start mb-3 mb-md-0">
					<ul className="nav nav-pills list-group align-items-center fw-bold">
						<li className="nav-item mx-2 mx-md-3">
							<button className="fw-bold nav-item nav-link mx-md-3 mx-2" style={{ color: "darkblue" }}>
								Privacy Policy
							</button>
						</li>
						<li className="nav-item mx-2 mx-md-3">
							<button className="fw-bold nav-item nav-link mx-md-3 mx-2" style={{ color: "darkblue" }}>
								Terms & Conditions
							</button>
						</li>
					</ul>
				</div>

				{/* Social Icons */}
				<div className="d-flex justify-content-center justify-content-md-end align-items-center text-center text-md-start">
					<div className="d-flex pt-3 pt-md-0">
						<FacebookIcon sx={{ color: "orange", fontSize: "2rem", mx: 2 }} />
						<InstagramIcon sx={{ color: "orange", fontSize: "2rem", mx: 2 }} />
						<TwitterIcon sx={{ color: "orange", fontSize: "2rem", mx: 2 }} />
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;