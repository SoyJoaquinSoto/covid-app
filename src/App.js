import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DayOneScreen from "./screens/DayOneScreen";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
	return (
		<Router>
			<div>
				<nav className="h-14 flex items-center pl-8 text-xl border-b-2 border-black">
					<Link to="/">Covid App</Link>
				</nav>

				<Switch>
					<Route path="/day-one">
						<DayOneScreen />
					</Route>
					<Route path="/">
						<HomeScreen />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
