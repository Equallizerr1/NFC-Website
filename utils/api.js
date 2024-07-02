import axios from "axios";
import { imgurToken, imgurUrl } from "./api_details";

let config = {
	method: "get",
	url: imgurUrl,
	headers: {
		Authorization: imgurToken,
	},
};

export const getImages = () => {
	return axios
		.request(config)
		.then(({ data: { data } }) => {
			return data.images;
		})
		.catch((error) => {
			console.log(error);
		});
};
