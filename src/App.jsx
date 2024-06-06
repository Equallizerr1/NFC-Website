import "./App.css";
import { Routes, Route } from 'react-router-dom';
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { Concerts } from "./components/Concerts"
import { Portraits } from "./components/Portraits";
import { Project } from "./components/Project";
import { MeetTheArtist } from "./components/MeetTheArtist";
import { Bookings } from "./components/Bookings";
import { Testimonials } from "./components/Testimonials";
import { MeetThePhotographer } from "./components/MeetThePhotographer";
import { useEffect, useState } from 'react';
import { getMedia } from '../utils/api';
function App() {
	const [flattened, setFlattened] = useState([])
	const nested = []
	const word = "https://scontent-man2-1.cdninstagram.com/o1/"
	const filterByMeet = "M E E T  T H E  A R T I S T  S E R I E S"
	useEffect(() => {
		getMedia().then(({ data }) => {
			data.forEach((item) => {
				console.log(item)
				if (item.caption.includes(filterByMeet)) {
					return
				} else {

					nested.push(item.children.data)
					setFlattened(nested.flat())
				}
			})
		})
	}, [])
	const filtered = []
	flattened.forEach((item) => {
		console.log(item)
		item.media_url.includes(word) ? null : filtered.push(item)
	})

	return (
		<>
			<Header></Header>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/MeetThePhotographer" element={<MeetThePhotographer />}></Route>
				<Route path="/Concerts" element={<Concerts props={filtered} />} />
				<Route path="/Portraits" element={<Portraits />}></Route>
				<Route path="/Project:I'mComingOut" element={<Project />}></Route>
				<Route path="/MeetTheArtist" element={<MeetTheArtist />}></Route>
				<Route path="/Bookings" element={<Bookings />}></Route>
				<Route path="/Testimonials" element={<Testimonials />}></Route>
			</Routes>
		</>
	);
}

export default App;
