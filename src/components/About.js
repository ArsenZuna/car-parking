import React from "react";

const About = () => {
	return (
		<div className="container-fluid">
			<div style={{backgroundColor: "darkblue", borderRadius: "10px"}}>
				<div className="d-flex justify-content-center pb-4">
					<p className="fw-bold pt-5" style={{color: "darkorange", fontSize: "55px"}}>
						About E16
					</p>
				</div>
			</div>

			{/*1st section*/}
			<div className="container-fluid d-md-flex justify-content-md-between flex-column flex-md-row pt-md-5 pb-md-5">
				<div className="col-1"></div>
				<div className="col-12 col-md-5">
					<div className="align-self-center text-center text-md-left pt-5">
						<h1 className="fw-bold pt-4 pb-md-3" style={{ color: "darkorange" }}>Come to us</h1>
						<p className="fs-md-5 fs-4" style={{ color: "darkblue" }}>
							You can find our parking storage very easily on the map, we are only 1 mile away from the
							airport, so you can travel with your mind at ease when it comes to the safety of your vehicle, or even if
							your destination is not the airport, you can park your car at E16 and finish your errands around...
						</p>
					</div>
				</div>
				<div className="col-1"></div>
				<div className="col-12 col-md-4 pt-md-3 pt-4 pb-3">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5834399210166!2d0.02401887671617489!3d51.5025113110603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a86d07cd0963%3A0x7617e3d7f27da48e!2sN%20Woolwich%20Rd%2C%20London%20E16%202BB%2C%20Mbret%C3%ABria%20e%20Bashkuar!5e0!3m2!1ssq!2s!4v1699468684058!5m2!1ssq!2s"
						width="100%" height="400" style={{ borderRadius: "10px" }} allowFullScreen="" loading="lazy" title="map"
						referrerPolicy="no-referrer-when-downgrade">
					</iframe>
				</div>
				<div className="col-1"></div>
			</div>

			{/*2nd Section*/}
			<div className="container-fluid d-md-flex justify-content-md-between flex-column flex-md-row pt-md-5 pb-md-5" style={{backgroundColor: "darkblue", borderRadius: "10px"}}>
				<div className="col-1"></div>
					<div className="col-12 col-md-4 pt-md-3 pt-4 pb-3 pt-5">
					<div className="align-self-center text-center text-md-left">
						<img
							src="https://www.noxion.com/media/toepassing/image/cache/530x/p/a/parking_1.jpg"
							width="100%" height="400" style={{borderRadius: "10px"}} loading="lazy"
							referrerPolicy="no-referrer-when-downgrade" alt="img"/>
					</div>
				</div>
				<div className="col-1"></div>
				<div className="col-12 col-md-5">
					<h1 className="fw-bold pt-5 pb-3" style={{color: "darkorange"}}>Who Are We</h1>
					<p className="fw-bold fs-5 text-light">
						E16 Car Parking is not just a parking facility; we are your trusted partner in ensuring your vehicle's
						safety and security.
						With years of experience in the industry, we have established ourselves as a leading name in long-term car
						parking, setting the standard for excellence.
					</p>
				</div>
				<div className="col-1"></div>
			</div>

			{/*3rd Section*/}
			<div className="container-fluid d-md-flex justify-content-md-between flex-column flex-md-row pt-md-5 pb-md-5">
				<div className="col-1"></div>
				<div className="col-12 col-md-5">
					<div className="align-self-center text-center text-md-left pt-5">
						<h1 className="fw-bold pt-5 pb-md-3" style={{ color: "darkorange" }}>Why Choose E16 Car Parking?</h1>
						<ul className="list-group list-group-flush fw-bold fs-5" style={{color: "darkblue"}}>
							<li>Secure Facilities</li>
							<li>Convenient Online Booking</li>
							<li>Transparent Policies</li>
							<li>Customer Service Excellence</li>
						</ul>
					</div>
				</div>
				<div className="col-1"></div>
				<div className="col-12 col-md-4 pt-md-3 pt-4 pb-3">
					<img
						src="https://sika.scene7.com/is/image/sika/glo-car-parking-garage-floor-03:16-9?wid=1920&hei=1080&fit=crop%2C1"
						width="100%" height="400" style={{borderRadius: "10px"}} allowFullScreen="" loading="lazy"
						referrerPolicy="no-referrer-when-downgrade" alt="img2"/>
				</div>
				<div className="col-1"></div>
			</div>

			{/*4th Section*/}
			<div className="container-fluid d-md-flex justify-content-md-between flex-column flex-md-row pt-md-5 pb-md-5" style={{backgroundColor: "darkblue", borderRadius: "10px"}}>
				<div className="col-1"></div>
				<div className="col-12 col-md-4 pt-md-3 pt-4">
					<img
						src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX27022076.jpg"
						width="100%" height="400" style={{borderRadius: "10px"}} allowFullScreen="" loading="lazy"
						referrerPolicy="no-referrer-when-downgrade" alt="img3"/>
				</div>
				<div className="col-1"></div>
				<div className="col-12 col-md-5">
					<div className="align-self-center text-center text-md-left pt-5">
						<h1 className="fw-bold pt-5 pb-md-3" style={{ color: "darkorange" }}>Join Us on this Journey</h1>
						<p className="fs-md-5 fs-4 text-light">
							You can find our parking storage very easily on the map, we are only 1 mile away from the
							airport, so you can travel with your mind at ease when it comes to the safety of your vehicle, or even if
							your destination is not the airport, you can park your car at E16 and finish your errands around...
						</p>
					</div>
				</div>
				<div className="col-1"></div>
			</div>

		</div>
	)
}

export default About;