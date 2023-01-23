import axios from "axios";

const apiTimeout = axios.create({
	baseURL: "https://frontend-challenge-7bu3nxh76a-uc.a.run.app?timeout",
	timeout: 5000,
});

export default apiTimeout;
