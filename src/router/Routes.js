import React from 'react';
import {BrowserRouter, Routes as Switch, Route} from "react-router-dom";
import Homepage from "../pages/Homepage";
import AboutUs from "../pages/AboutUs";
import Reserve from "../pages/Reserve";

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" element={<Homepage/>}/>
				<Route exact path="/about_us" element={<AboutUs/>}/>
				<Route exact path="/reserve" element={<Reserve/>}/>
				{/*<Route exact path="/news" element={<News/>}/>*/}
			</Switch>
		</BrowserRouter>
	)
}

export default Routes;