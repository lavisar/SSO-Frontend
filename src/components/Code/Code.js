import React, { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const Code = (props) => {
	const [searhcParams, setSearchParams] = useSearchParams();
	const firsRunRef = useRef(false);

	useEffect(() => {
		const ssoToken = searhcParams.get("ssoToken");
		if (ssoToken && firsRunRef.current === false) {
			firsRunRef.current = true;
			axios
				.post(
					process.env.REACT_APP_BACKEND_SSO_VERIFY_TOKEN,
					{ ssoToken },
					{ withCredentials: true }
				)
				.then((res) => {
					console.log(">>> res", res);
				})
				.catch((err) => console.log(">>> error: ", err));
		}
	}, []);
	return <div>Code</div>;
};

export default Code;
