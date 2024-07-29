import axios from "axios";

export const axiosClient = axios.create({
  // baseURL: "https://garagedocs.onrender.com/api/v1",
  // baseURL: "http://localhost:9000/api/v1",
  baseURL: "http://45.56.77.22/api/v1",
});
