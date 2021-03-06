import axios from "axios";
import { API_END_POINT, API_KEY } from "constants/environment";
import { FETCH_VIDEO_COUNT } from "constants/classroom";

const API = axios.create({
  baseURL: API_END_POINT,
  params: {
    part: "snippet",
    order: "viewCount",
    maxResults: FETCH_VIDEO_COUNT,
    key: API_KEY,
  },
});

export default API;
