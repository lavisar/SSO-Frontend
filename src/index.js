import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import AppRoute from "./routes/AppRoute";
// redux
import { Provider } from "react-redux";
import Code from "./components/Code/Code";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<React.StrictMode>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<AppRoute />}>
						<Route path="/about" element={<About />} />						
					</Route>
					<Route path="/code" element={<Code />} />
				</Routes>
			</BrowserRouter>
		</React.StrictMode>
	</Provider>
);
reportWebVitals();
