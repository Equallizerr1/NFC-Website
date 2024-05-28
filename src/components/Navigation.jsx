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
							src="../src/assets/NFC_Logo.jpg"
							width="30"
							height="30"
							className="d-inline-block align-top"
						/>{" "}
						No Friends Club Collective UK
					</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="/concerts">Concerts</Nav.Link>
						<Nav.Link href="/portraits">Portraits</Nav.Link>
						<Nav.Link href="/project">Project: I'm Coming Out</Nav.Link>
						<Nav.Link href="/meet">Meet the Artist</Nav.Link>
						<Nav.Link href="/testimonials">Testimonials</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
}

export default Navigation;
