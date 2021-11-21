import axios from "axios";
import { baseURL } from "utils/constants/endpoints";

const api = axios.create({
  baseURL,
});

export default api;