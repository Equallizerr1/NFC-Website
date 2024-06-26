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
	const [meetFlat, setMeetFlat] = useState([])
	const nested = []
	const meetFiltered = []

	const word = "https://scontent-man2-1.cdninstagram.com/o1/"
	const filterByMeet = "M E E T  T H E  A R T I S T  S E R I E S"
	useEffect(() => {
		getMedia().then(({ data }) => {
			data.forEach((item) => {
				if (item.caption.includes(filterByMeet)) {
					meetFiltered.push(item.children.data)
					setMeetFlat(meetFiltered.flat())
				} else {
					nested.push(item.children.data)
					setFlattened(nested.flat())
				}
			})
		})
	}, [])
	const concertsFiltered = []
	flattened.forEach((item) => {
		item.media_url.includes(word) ? null : concertsFiltered.push(item)
	})

	// meetFlat.forEach((item) => {
	// 	item.media_url.includes(word) ? null : meetFiltered.push(item)
	// })

	return (
		<>
			<Header></Header>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/MeetThePhotographer" element={<MeetThePhotographer />}></Route>
				<Route path="/Concerts" element={<Concerts props={concertsFiltered} />} />
				<Route path="/Portraits" element={<Portraits />}></Route>
				<Route path="/Project:I'mComingOut" element={<Project />}></Route>
				<Route path="/MeetTheArtist" element={<MeetTheArtist props={meetFlat} />}></Route>
				<Route path="/Bookings" element={<Bookings />}></Route>
				<Route path="/Testimonials" element={<Testimonials />}></Route>
			</Routes>
		</>
	);
}

export default App;
