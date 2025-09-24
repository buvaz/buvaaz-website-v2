import axios from "axios";

const api = axios.create({
    // baseURL: "http://localhost:3002",
    baseURL: "https://staging-api.buvaaz.com",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
