import axios from "axios";

const api = axios.create({
    baseURL: `${import.meta.env.VITE_BACK_END_URL}/api`,
    origin: 'https://jayanta66.github.io/**'
    withCredentials: true,
});

export default api;