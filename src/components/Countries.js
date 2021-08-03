import CountryCard from "./CountryCard";

function Countries({ countries }) {
	return (
		<div className="grid grid-cols-3 gap-10 mb-10">
			{countries &&
				countries.map((country) => <CountryCard country={country} />)}
		</div>
	);
}

export default Countries;
