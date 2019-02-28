import axios from "axios";

const KEY = "AIzaSyDccPudve1HGKQUdVtTymrGN5bX2NhnPzo";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
