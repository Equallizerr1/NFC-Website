import axios from "axios";
import {
	IG_LONG_LIVED_ACCESS_TOKEN_NFC,
	IG_USER_ID_NFC,
} from "./api_details.js";

const nfcApi = axios.create({
	baseURL: `https://graph.instagram.com/v15.0/${IG_USER_ID_NFC}/media?fields=id,caption,media_url,media_type,timestamp,children{media_url}&access_token=${IG_LONG_LIVED_ACCESS_TOKEN_NFC}`,
	//baseURL: `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,timestamp,children{media_url}&access_token=${IG_LONG_LIVED_ACCESS_TOKEN_NFC}`,
});

// const allPostsToSarah = axios.create({
// 	baseURL: `https://graph.instagram.com/v15.0/${IG_USER_ID_NFC}/media?fields=id,caption,media_url,media_type,timestamp,children{media_url}&access_token=${IG_LONG_LIVED_ACCESS_TOKEN_NFC}`,
// });
export const getMedia = () => {
	return nfcApi.get().then(({ data }) => {
		return data;
	});
};
const nextPosts = axios.create({
	baseURL: `https://graph.instagram.com/v20.0/17841445119364695/media?fields=id,caption,media_url,media_type,timestamp,children{media_url}&access_token=${IG_LONG_LIVED_ACCESS_TOKEN_NFC}`,
});
export const getNextPosts = () => {
	return nextPosts.get().then(({ data }) => {
		return data;
	});
};
