import axios from "axios";

const apiError = axios.create({
	baseURL: "https://frontend-challenge-7bu3nxh76a-uc.a.run.app?internalError",
	timeout: 5000,
});

export default apiError;
