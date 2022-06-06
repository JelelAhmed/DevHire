import axios from "axios";

export const Terawork = axios.create({
  baseURL: 'https://api.terawork.com/service-categories/sellers-services/computer-software-development',
	headers: {
		'Content-Type': 'application/json',
		'Authorization': ''
	},
});