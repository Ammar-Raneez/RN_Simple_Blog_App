import axios from "axios";

export default axios.create({
  // add ngrok tunnelled url here
  baseURL: "http://4ccb4d3696a7.ngrok.io",
});
