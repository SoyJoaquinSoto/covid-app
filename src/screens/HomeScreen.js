import { useState, useEffect } from "react";
import axios from "axios";
import Summary from "../components/Summary";
import Countries from "../components/Countries";

const getSummary = () => {
	return axios
		.get("https://api.covid19api.com/summary")
		.then((response) => response.data);
};

function HomeScreen() {
	const [summary, setSummary] = useState({});

	useEffect(() => {
		getSummary().then((data) => setSummary(data));
	}, []);

	return (
		<div className="mx-auto w-11/12">
			<h1 className="text-3xl font-semibold my-10">Covid Tracker</h1>

			<section className="mb-20">
				<h2 className="text-center text-xl font-semibold mb-5">
					Global Summary
				</h2>
				<Summary summary={summary.Global} />
			</section>

			<section>
				<h2 className="text-center text-xl font-semibold mb-5">Countries</h2>
				<Countries countries={summary.Countries} />
			</section>
		</div>
	);
}

export default HomeScreen;
