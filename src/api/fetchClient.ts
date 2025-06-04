// src/api/fetchClient.ts
import axios from "axios";

const fetchClient = axios.create({
  baseURL: "https://frontend-take-home-service.fetch.com",
  withCredentials: true,
});

export default fetchClient;
