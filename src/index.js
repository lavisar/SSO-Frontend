import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppRoute from "./routes/AppRoute";
import About from "./components/About/About";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<AppRoute />}>
					<Route path="/about" element={<About />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
reportWebVitals();
