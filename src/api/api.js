import axios from "axios";

const api = axios.create({
    baseURL: `${import.meta.env.VITE_BACK_END_URL}/api`,
    withCredentials: true,
});

 const corsOptions = {
          origin: 'https://jayanta66.github.io',
          credentials: true,
        };

export default api;