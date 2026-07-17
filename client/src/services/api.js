import axios from "axios";

const API = axios.create({
  baseURL: "https://localvibe-1c6t.onrender.com/api"
});

export default API;