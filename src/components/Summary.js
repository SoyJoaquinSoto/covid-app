function Summary({ summary }) {
	return (
		<div className="grid grid-cols-4 gap-3">
			<div className="border-2 border-black text-center py-10">
				New Confirmed: {summary?.NewConfirmed}
			</div>
			<div className="border-2 border-black text-center py-10">
				Total Confirmed: {summary?.TotalConfirmed}
			</div>
			<div className="border-2 border-black text-center py-10">
				New Deaths: {summary?.NewDeaths}
			</div>
			<div className="border-2 border-black text-center py-10">
				Total Deaths: {summary?.TotalDeaths}
			</div>
		</div>
	);
}

export default Summary;
