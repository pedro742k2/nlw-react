import axios from "axios";

export const serverUrl = "http://localhost:4000";

export const api = axios.create({
  baseURL: serverUrl,
});
