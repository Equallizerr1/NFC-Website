import "./App.css";
import { Routes, Route } from 'react-router-dom';
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { Concerts } from "./components/Concerts"
import { Portraits } from "./components/Portraits";

function App() {
	return (
		<>
			<Header></Header>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/concerts" element={<Concerts />} />
				<Route path="/portraits" element={<Portraits />}></Route>

			</Routes>
		</>
	);
}

export default App;
