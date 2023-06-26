import axios from "axios";
import { api } from "../urlConfig";

const accessToken = window.localStorage.getItem("accessToken");

const axiosIntance = axios.create({
  baseURL: api,
  headers: {
    Authorization: accessToken ? `Bearer ${accessToken}` : "",
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

export default axiosIntance;
