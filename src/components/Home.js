import React, {useState} from "react";
import ParkingHero from "../assets/heroparking.jpg";
import {DemoContainer} from '@mui/x-date-pickers/internals/demo';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {TimePicker} from "@mui/x-date-pickers";
import {Button, TextField} from "@mui/material";
import LocalAirportRoundedIcon from '@mui/icons-material/LocalAirportRounded';
import LocalParkingRoundedIcon from '@mui/icons-material/LocalParkingRounded';
import UpdateRoundedIcon from '@mui/icons-material/UpdateRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import PaymentRoundedIcon from '@mui/icons-material/PaymentRounded';
import {orange} from "@mui/material/colors";
import dayjs from "dayjs";
import {useNavigate} from "react-router-dom";
import API from "../API/API";

const Home = () => {
	const [entryDate, setEntryDate] = useState(dayjs());
	const [entryTime, setEntryTime] = useState(dayjs());
	const [exitDate, setExitDate] = useState(dayjs());
	const [exitTime, setExitTime] = useState(dayjs());

	let navigate = useNavigate();

	const submitHandler = async (e) => {
		e.preventDefault();

		// try {
		// 	// Make a POST request to check reservations
		// 	const response = await API.post('/Booking/CheckReservation', {
		// 		ArrivalDate: entryDate.format('YYYY-MM-DD'),
		// 		ArrivalTime: parseInt(entryTime.format('HH:mm'), 12),
		// 		LeavingDate: exitDate.format('YYYY-MM-DD'),
		// 		LeavingTime: parseInt(exitTime.format('HH:mm'), 12)
		// 	});
		//
		// 	// Assuming your server responds with relevant data
		// 	// const isReservationAvailable = response.data.isReservationAvailable;
		// 	//
		// 	// if (isReservationAvailable) {
		// 	// 	// Navigate to the reservation page if available
		// 	// 	navigate('/reserve', { state: { entryDate, entryTime, exitDate, exitTime } });
		// 	// } else {
		// 	// 	// Show an alert or handle accordingly if not available
		// 	// 	alert('No reservations available for the selected date and time.');
		// 	// }
		// } catch (error) {
		// 	console.error('Error checking reservations:', error);
		// 	// Reset fields
		// 	setEntryDate(dayjs(''));
		// 	setEntryTime(dayjs(''));
		// 	setExitDate(dayjs(''));
		// 	setExitTime(dayjs(''));
		// 	// Handle error and display a message to the user
		// }

		// Log the values (for testing purposes)
		console.log({ entryDate, entryTime, exitDate, exitTime });

		// Navigate to reserve without state
		navigate('/reserve');
		// Log the values (for testing purposes)
	};

	return (
		<div className="container-fluid">
			<div style={{backgroundImage: `url(${ParkingHero})`, borderRadius: "10px"}}>    {/* Hero Section Start */}
				<div>
					<p className="fw-bold pt-5" style={{color: "darkorange", fontSize: "55px"}}>
						Long-Stay Carpark & Car Storage
					</p>
				</div>
				<div className="container pt-4">
					<div className="row gap-5">
						<div className="col-2">
							<LocalAirportRoundedIcon sx={{color: orange[500], fontSize: "35px"}}/>
							<p className="text-light fw-bold fs-4">Airport Nearby</p>
						</div>
						<div className="col-2">
							<LocalParkingRoundedIcon sx={{color: orange[500], fontSize: "35px"}}/>
							<p className="text-light fw-bold fs-4">Spacious</p>
						</div>
						<div className="col-2">
							<UpdateRoundedIcon sx={{color: orange[500], fontSize: "35px"}}/>
							<p className="text-light fw-bold fs-4">Open 24/7</p>
						</div>
						<div className="col-2">
							<LockRoundedIcon sx={{color: orange[500], fontSize: "35px"}}/>
							<p className="text-light fw-bold fs-4">Safe & Secure</p>
						</div>
						<div className="col-2">
							<PaymentRoundedIcon sx={{color: orange[500], fontSize: "35px"}}/>
							<p className="text-light fw-bold fs-4">Online Payment</p>
						</div>
					</div>
				</div>
				<div className="d-flex justify-content-center align-items-center">
					<div className="p-5 m-5" style={{backgroundColor: "whitesmoke", borderRadius: "10px"}}>
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<div>
								<DemoContainer components={['DatePicker', 'TimePicker']}>
									<DatePicker value={entryDate} onChange={(e) => setEntryDate(e)} label="Entry Date"/>
									<TimePicker value={entryDate} onChange={(e) => setEntryTime(e)} label="Entry Time"/>
								</DemoContainer>
							</div>
							<div className="pt-2">
								<DemoContainer components={['DatePicker', 'TimePicker']}>
									<DatePicker value={exitDate} onChange={(e) => setExitDate(e)} label="Exit Date"/>
									<TimePicker value={exitTime} onChange={(e) => setExitTime(e)} label="Exit Time"/>
								</DemoContainer>
							</div>
							<div className="pt-5">
								<Button onClick={submitHandler} variant="contained" size="large">
									Find Parking Spot
								</Button>
							</div>
						</LocalizationProvider>
					</div>
				</div>
			</div>
			{/* Hero Section End */}
			{/* 2nd Section Start */}
			<div className="container pt-5 pb-5" style={{color: "darkblue"}}>
				<h2 className="fw-bold pt-3">Our car parks are conveniently close to the terminal,</h2>
				<h2 className="fw-bold pb-3">therefore the earlier you book, the more you save!</h2>
			</div>
			{/* 2nd Section End */}
			{/* 3rd Section Start */}
			<div className="container-fluid pt-md-5 pb-md-3" style={{ backgroundColor: "darkblue", opacity: "80%", borderRadius: "10px" }}>
				<div className="row pt-3 pb-3">
					<div className="col-md-6">
						<div className="row justify-content-start">
							<h2 className="fw-bold" style={{ color: "darkorange" }}>Online Booking</h2>
							<p className="text-light pt-2 fs-md-5 fs-5">Offering you the convenient option to secure your parking spot hassle-free with
								our user-friendly online booking platform.
								Reserve your car space in advance and enjoy peace of mind, knowing you have a guaranteed spot waiting
								for you.
							</p>
						</div>
						<div className="row pt-md-3 pb-md-3">
							<h2 className="fw-bold" style={{ color: "darkorange" }}>Arriving</h2>
							<p className="text-light pt-2 fs-md-5 fs-5">Upon arrival at our facility's entrance, our state-of-the-art barrier system
								automatically recognizes your
								vehicle's license plate and validates your pre-booking, ensuring a seamless and efficient
								experience.
							</p>
						</div>
					</div>
					<div className="col-md-6">
						<h2 className="fw-bold pt-md-5" style={{ color: "darkorange" }}>Terms & Conditions</h2>
						<p className="text-light pt-2 fs-md-5 fs-5">When you make an online booking for long-term car parking with E16, you are
							entering into
							a binding agreement and fully accepting the terms and conditions outlined below. It is
							imperative that you carefully read and fully comprehend these terms, as they govern your use
							of our long-stay parking facility. Your booking constitutes your explicit agreement to adhere to
							these terms and conditions...
						</p>
					</div>
				</div>
			</div>
			{/* 3rd Section End */}
			{/* 4th Section Start */}
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
				<div className="col-12 col-md-4 pt-md-3 pt-4">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5834399210166!2d0.02401887671617489!3d51.5025113110603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a86d07cd0963%3A0x7617e3d7f27da48e!2sN%20Woolwich%20Rd%2C%20London%20E16%202BB%2C%20Mbret%C3%ABria%20e%20Bashkuar!5e0!3m2!1ssq!2s!4v1699468684058!5m2!1ssq!2s"
						width="100%" height="400" style={{ borderRadius: "10px" }} allowFullScreen="" loading="lazy" title="ad"
						referrerPolicy="no-referrer-when-downgrade">
					</iframe>
				</div>
				<div className="col-1"></div>
			</div>
			{/* 4th Section End */}
			{/* 5th Section Start */}
			<div className="p-4 rounded" style={{backgroundColor: "darkblue"}}>
				<div className="container pb-4">
					<p className="fw-bold pt-5 text-warning fs-1">
						Check Your Reservation
					</p>
					<p className="fs-5 fw-bold text-light">
						Have you already reserved a parking spot for yourself? Insert below your license plate to check if it is still valid...
					</p>
					<div className="container d-md-flex justify-content-center pt-3 gap-4">
						<TextField
							label="License Plate"
							variant="filled"
							className="bg-light rounded"
						/>
						<Button variant="contained"	size="medium"	className="bg-warning rounded">
							Check
						</Button>
					</div>
				</div>
			</div>
			{/* 5th Section End */}
		</div>
	)
}

export default Home;