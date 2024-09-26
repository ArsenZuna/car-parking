import React, {useState} from "react";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {TimePicker} from "@mui/x-date-pickers";
import {Alert} from "@mui/material";
import {Button, Grid, TextField} from "@mui/material";
import dayjs from "dayjs";
import API from "../API/API";

const ReserveParking = () => {
	const [showAlert, setShowAlert] = useState(false);
	const [entryDate, setEntryDate] = useState(dayjs());
	const [entryTime, setEntryTime] = useState(dayjs());
	const [exitDate, setExitDate] = useState(dayjs());
	const [exitTime, setExitTime] = useState(dayjs());
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [confirmEmail, setConfirmEmail] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [licensePlate, setLicensePlate] = useState('');
	const [note, setNote] = useState('');
	const postcode = '10001';

	const submitHandler = async (e) => {
		e.preventDefault();

		try {
			// Make a POST request to check reservations
			const response = await API.post('/Booking/CompleteReservation', {
				InitialReservationInfo: {
					ArrivalDate: entryDate.format('YYYY-MM-DD'),
					ArrivalTime: parseInt(entryTime.format('HH:mm'), 12),
					LeavingDate: exitDate.format('YYYY-MM-DD'),
					LeavingTime: parseInt(exitTime.format('HH:mm'), 12),
				},
				First_Name: firstName,
				Last_Name: lastName,
				Email: email,
				Confirm_Email: confirmEmail,
				Mobile_No: phoneNumber,
				Vehicle_Reg: licensePlate,
				Note: note,
				Postcode: postcode,
			});

			// Assuming your server responds with a success status
			if (response.status === 200) {
				// Display a success alert
				setShowAlert(true);

				// Optionally, you can set a timeout to hide the alert after a certain duration
				setTimeout(() => {
					setShowAlert(false);
				}, 3000);
			} else {
				// Handle other response statuses if needed
				alert('Reservation failed. Please try again.');
			}
		} catch (error) {
			console.error('Error completing reservations:', error);
			// Handle error and display a message to the user
			alert('Error completing reservation. Please try again.');
		}

		//Reset fields
		setEntryDate(dayjs());
		setEntryTime(dayjs());
		setExitDate(dayjs());
		setExitTime(dayjs());
		setFirstName('');
		setLastName('');
		setEmail('');
		setConfirmEmail('');
		setPhoneNumber('');
		setLicensePlate('');
		setNote('');
	}

	const handleCloseAlert = () => {
		setShowAlert(false);
	};

	return (
		<div className="container-fluid">
			<div style={{backgroundColor: "darkblue", borderRadius: "10px"}}>
				<div className="container pb-4">
					<p className="fw-bold pt-5" style={{color: "darkorange", fontSize: "55px"}}>
						Reserve Your Spot at E16
					</p>
					<p className="fs-5 fw-bold text-light">
						Are you planning to go away for a couple of days and want to leave your car in safe hands?
						Look no further and check our parking if it has a free space left for you.
					</p>
				</div>
			</div>
			<div className="d-flex justify-content-center align-items-center">
				<div className="container p-5 m-5">
					<p className="fw-bold fs-3 pb-3">Please enter the info on the form below</p>
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<Grid container spacing={3}>
							<Grid item xs={12} md={6}>
								<DemoContainer components={['DatePicker', 'TimePicker']}>
									<DatePicker value={entryDate} onChange={(e) => setEntryDate(e)} label="Entry Date" fullWidth/>
									<TimePicker value={entryTime} onChange={(e) => setEntryTime(e)} label="Entry Time" fullWidth/>
								</DemoContainer>
							</Grid>
							<Grid item xs={12} md={6}>
								<DemoContainer components={['DatePicker', 'TimePicker']}>
									<DatePicker value={exitDate} onChange={(e) => setExitDate(e)} label="Exit Date" fullWidth/>
									<TimePicker value={exitTime} onChange={(e) => setExitTime(e)} label="Exit Time" fullWidth/>
								</DemoContainer>
							</Grid>
							<Grid item xs={12} md={6}>
								<TextField onChange={(e) => setFirstName(e.target.value)} label="First Name" variant="outlined"
													 fullWidth/>
							</Grid>
							<Grid item xs={12} md={6}>
								<TextField onChange={(e) => setLastName(e.target.value)} label="Last Name" variant="outlined"
													 fullWidth/>
							</Grid>
							<Grid item xs={12} md={6}>
								<TextField onChange={(e) => setEmail(e.target.value)} label="Email" variant="outlined" fullWidth/>
							</Grid>
							<Grid item xs={12} md={6}>
								<TextField onChange={(e) => setConfirmEmail(e.target.value)} label="Confirm Email" variant="outlined"
													 fullWidth/>
							</Grid>
							<Grid item xs={12} md={6}>
								<TextField onChange={(e) => setPhoneNumber(e.target.value)} label="Phone Number" variant="outlined"
													 fullWidth/>
							</Grid>
							<Grid item xs={12} md={6}>
								<TextField onChange={(e) => setLicensePlate(e.target.value)} label="License Plate No."
													 variant="outlined"
													 fullWidth/>
							</Grid>
							<Grid item xs={12} md={6}>
								<TextField onChange={(e) => setNote(e.target.value)} label="Note" variant="outlined" fullWidth/>
							</Grid>
							<Grid item xs={12} md={6}>
								<div className="pt-md-2">
									<Button variant="contained" size="large" onClick={submitHandler} fullWidth>
										Find Parking Spot
									</Button>
								</div>
							</Grid>
						</Grid>
					</LocalizationProvider>
					<div className="container pt-md-3 align-items-center">
						{showAlert && (
							<Alert onClose={handleCloseAlert}>
								The reservation was made successfully.
							</Alert>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ReserveParking;