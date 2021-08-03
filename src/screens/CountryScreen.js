import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const getSummary = () => {
	return axios
		.get("https://api.covid19api.com/summary")
		.then((response) => response.data);
};

function CountryScreen(props) {
	const [summary, setSummary] = useState({});

	useEffect(() => {
		getSummary().then((data) => setSummary(data));
	}, []);

	return <div>Country page</div>;
}

export default CountryScreen;
