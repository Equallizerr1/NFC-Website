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
import { getImages } from "../utils/api";

function App() {
	const [images, setImages] = useState([])

	useEffect(() => {
		getImages().then((data) => {
			const sorted = [...data].toSorted((a, b) => a.name.replace(/\D/g, "") - b.name.replace(/\D/g, ""));
			setImages(sorted);
		});
	}, []);

	return (
		<>
			<Header></Header>
			<Routes>
				<Route path="/" element={<HomePage props={images} />} />
				<Route path="/MeetThePhotographer" element={<MeetThePhotographer />}></Route>
				<Route path="/Concerts" element={<Concerts props={images} />} />
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
