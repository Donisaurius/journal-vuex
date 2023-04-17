import axios from "axios";

const journalApi = axios.create({
  baseURL: "https://journal-api-cc62e-default-rtdb.firebaseio.com",
});

export default journalApi;
