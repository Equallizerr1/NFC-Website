import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
	return (
		<>
			<Navbar expand="lg" className="bg-body-tertiary">
				<Container>
					<Navbar.Brand href="/">
						<img
							alt=""
							src="	/assets/NFC_Logo.jpg"
							width="30"
							height="30"
							className="d-inline-block align-top"
						/>{" "}
						No Friends Club Collective UK
					</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="/MeetThePhotographer">Meet the Photographer</Nav.Link>
						<Nav.Link href="/Concerts">Concerts</Nav.Link>
						<Nav.Link href="/Portraits">Portraits</Nav.Link>
						<Nav.Link href="/Project:I'mComingOut">Project: I'm Coming Out</Nav.Link>
						<Nav.Link href="/MeetTheArtist">Meet the Artist</Nav.Link>
						<Nav.Link href="/Bookings">Bookings</Nav.Link>
						<Nav.Link href="/Testimonials">Testimonials</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
}

export default Navigation;
