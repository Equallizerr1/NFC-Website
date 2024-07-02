import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

export const ImageCarousel = ({ props }) => {
	return (
		<>
			{!props.length ? (
				<p>Loading</p>
			) : (
				<>
					<div id="carousel-container"
						style={{
							display: "block",
							padding: 10,
						}}>
						<Carousel>
							<Carousel.Item interval={1500}>
								<img
									className="d-block w-100"
									src={props.find(({ name }) => name === "74.jpg").link}
									alt="Nxdia"
								/>
								{/* <Carousel.Caption>
						<h3>Label for first slide</h3>
						<p>Sample Text for Image One</p>
						</Carousel.Caption> */}
							</Carousel.Item>
							<Carousel.Item interval={1500}>
								<img
									className="d-block w-100"
									src={props.find(({ name }) => name === "216.jpg").link}
									alt="Sam Tompkins"
								/>
								{/* <Carousel.Caption>
						<h3>Label for second slide</h3>
						<p>Sample Text for Image Two</p>
						</Carousel.Caption> */}
							</Carousel.Item>
							<Carousel.Item interval={1500}>
								<img
									className="d-block w-100"
									src={props.find(({ name }) => name === "355.jpg").link}
									alt="Neck Deep"
								/>
								{/* <Carousel.Caption>
						<h3>Label for third slide</h3>
						<p>Sample Text for Image Three</p>
						</Carousel.Caption> */}
							</Carousel.Item>
							<Carousel.Item interval={1500}>
								<img
									className="d-block w-100"
									src={props.find(({ name }) => name === "185.jpg").link}
									alt="Beth Mccarthy"
								/>
								{/* <Carousel.Caption>
						<h3>Label for fourth slide</h3>
						<p>Sample Text for Image Four</p>
						</Carousel.Caption> */}
							</Carousel.Item>
							<Carousel.Item interval={1500}>
								<img
									className="d-block w-100"
									src={props.find(({ name }) => name === "0.jpg").link}
									alt="Girlie"
								/>
								{/* <Carousel.Caption>
						<h3>Label for fifth slide</h3>
						<p>Sample Text for Image Five</p>
						</Carousel.Caption> */}
							</Carousel.Item>
							<Carousel.Item interval={1500}>
								<img
									className="d-block w-100"
									src={props.find(({ name }) => name === "84.jpg").link}
									alt="Nxdia, Beth Mccarthy and Catty.mp3"
								/>
								{/* <Carousel.Caption>
						<h3>Label for sixth slide</h3>
						<p>Sample Text for Image Six</p>
						</Carousel.Caption> */}
							</Carousel.Item>
						</Carousel>
					</div>
				</>
			)};
		</>

	)
};
