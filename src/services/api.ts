import axios from "axios";

const apiIdentidade = axios.create({
  baseURL: "https://localhost:7170",
});

export default apiIdentidade;

