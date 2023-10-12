import React from "react";
import App from "../App";
import { Outlet } from "react-router-dom";
const AppRoute = () => {
	return (
		<>
			<App />
      <Outlet/>
		</>
	);
};

export default AppRoute;
