import Axios from 'axios';

const KEY = "AIzaSyDCCgTbgg6bo_TVNPu5ckG85Ko3Ui_UuNg";

export default Axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
