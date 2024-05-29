import axios from "axios";
import { IG_LONG_LIVED_ACCESS_TOKEN_NFC, IG_USER_ID_NFC } from "./api_details";

const nfcApi = axios.create({
	baseURL: `https://graph.instagram.com/v15.0/${IG_USER_ID_NFC}/media?fields=id,caption,media_url,media_type,timestamp,children{media_url}&limit=10&access_token=${IG_LONG_LIVED_ACCESS_TOKEN_NFC}`,
});

export const getMedia = () => {
	return nfcApi.get().then(({ data }) => {
		return data;
	});
};
