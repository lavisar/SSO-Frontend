import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const Code = (props) => {
	const [searhcParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		let ssoToken = searhcParams.get("ssoToken");
		if (ssoToken) {
			axios
				.post(process.env.REACT_APP_BACKEND_SSO_VERIFY_TOKEN, {ssoToken})
				.then((res) => {
					console.log(">>> res", res);
				})
				.catch((err) => console.log(">>> error: ", err));
		}
	}, []);
	return <div>Code</div>;
};

export default Code;
