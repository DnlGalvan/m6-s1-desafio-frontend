import axios from "axios";

const api = axios.create({
	baseURL: "https://frontend-challenge-7bu3nxh76a-uc.a.run.app?delay=1000",
	timeout: 5000,
});

export default api;
