import axios from "axios";

const api = axios.create({
  baseURL:
    "https://taskflow-devops-production.up.railway.app/api",
});

export default api;