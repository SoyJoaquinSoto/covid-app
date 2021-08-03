function CountryCard({ country }) {
	return (
		<div className="border-2 border-black p-3">
			<h3 className="mb-5 text-center">{country.Country}</h3>
			<div className="mb-5 flex flex-col gap-3">
				<p>CountryCode: {country.CountryCode}</p>
				<p>Slug: {country.Slug}</p>
				<p>New Confirmed: {country.NewConfirmed}</p>
				<p>Total Confirmed: {country.TotalConfirmed}</p>
				<p>New Deaths: {country.NewDeaths}</p>
				<p>Total Deaths: {country.TotalDeaths}</p>
				<p>New Recovered: {country.NewRecovered}</p>
				<p>Total Recovered: {country.TotalRecovered}</p>
				<p>Date: {country.Date}</p>
			</div>
			<button className="bg-gray-200 rounded-lg w-full p-2">
				Go to Country
			</button>
		</div>
	);
}

export default CountryCard;
