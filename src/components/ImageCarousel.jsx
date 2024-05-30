import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

export const ImageCarousel = () => {
	return (
		<div id="carousel-container"
			style={{
				display: "block",
			}}>
			<Carousel>
				<Carousel.Item interval={1500}>
					<img
						className="d-block w-100"
						src={"https://scontent-man2-1.cdninstagram.com/v/t51.29350-15/368241695_327849173001364_7120904336374750951_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=ceJ0bb3Ntd0Q7kNvgFvW4NB&_nc_ht=scontent-man2-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYA2U2ONh1OTuQgvkjYyBejUgge8jBDu_kPMSr1e5b6IWw&oe=665EC947"}
						alt="Image One"
					/>
					<Carousel.Caption>
						<h3>Label for first slide</h3>
						<p>Sample Text for Image One</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={1500}>
					<img
						className="d-block w-100"
						src={"https://scontent-man2-1.cdninstagram.com/v/t51.29350-15/436428703_968717797914256_6257493648668864447_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=Ep6hq-Ea5hMQ7kNvgH11wIB&_nc_ht=scontent-man2-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYDPeGAWp-vfSUfARwGiBzjx32CrkwEYK6QboySNsqDKXw&oe=665EDD2C"}
						alt="Image Two"
					/>
					<Carousel.Caption>
						<h3>Label for second slide</h3>
						<p>Sample Text for Image Two</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={1500}>
					<img
						className="d-block w-100"
						src={"https://scontent-man2-1.cdninstagram.com/v/t51.29350-15/444434706_811500253845478_432667925481102393_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=_F2AT6RhHfAQ7kNvgG-utu6&_nc_ht=scontent-man2-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYCgVTRcYklB59DP9HEdJ11IJvJtVzSyUoz6eAZNsN3L3A&oe=665EAAC0"}
						alt="Image Three"
					/>
					<Carousel.Caption>
						<h3>Label for third slide</h3>
						<p>Sample Text for Image Three</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={1500}>
					<img
						className="d-block w-100"
						src={"https://scontent-man2-1.cdninstagram.com/v/t51.29350-15/354519071_988121442220967_158139795672551303_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=DNYkorsU1T0Q7kNvgEO0wC5&_nc_ht=scontent-man2-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYA3m_P_kPEZG07C1HgUDfVXBb7hO2T_-rHhVJ8EgQUcRA&oe=665EBC8E"}
						alt="Image Four"
					/>
					<Carousel.Caption>
						<h3>Label for fourth slide</h3>
						<p>Sample Text for Image Four</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={1500}>
					<img
						className="d-block w-100"
						src={"https://scontent-man2-1.cdninstagram.com/v/t51.29350-15/375475142_270440352606901_3643622405021606174_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=tBou6kL35rIQ7kNvgEls4cU&_nc_ht=scontent-man2-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYDnLR3tWpRHnFhaqfTCmA3V108Pk2dpMRYrTnolMUf_qQ&oe=665EB971"}
						alt="Image Five"
					/>
					<Carousel.Caption>
						<h3>Label for fifth slide</h3>
						<p>Sample Text for Image Five</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={1500}>
					<img
						className="d-block w-100"
						src={"https://scontent-man2-1.cdninstagram.com/v/t51.29350-15/374673955_1485585302257496_5764536069796501876_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=MIKF6rtNBRgQ7kNvgH6wulX&_nc_ht=scontent-man2-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AYASp3uDHUXHQS7-MJtIIDkyNy_DKglvjB7zyDvqo8Iwog&oe=665EBB94"}
						alt="Image Six"
					/>
					<Carousel.Caption>
						<h3>Label for sixth slide</h3>
						<p>Sample Text for Image Six</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};
