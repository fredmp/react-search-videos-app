import Axios from 'axios';

const KEY = "AIzaSyBTuwAgG8MKz46WM_B74gNSxk8f_UZtCHU";

export default Axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
