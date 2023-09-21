import axios, { ResponseType } from "axios";
import { useEffect } from "react";

const api = axios.create({
  baseURL: "http://172.16.10.186:3001",
});

export default api;
