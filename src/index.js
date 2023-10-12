import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppRoute from "./routes/AppRoute";
import About from "./components/About/About";
// redux
import { Provider } from "react-redux";
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
				</Routes>
			</BrowserRouter>
		</React.StrictMode>
	</Provider>
);
reportWebVitals();
