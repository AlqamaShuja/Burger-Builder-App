import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-cdca3.firebaseio.com/"
});

export default instance;
