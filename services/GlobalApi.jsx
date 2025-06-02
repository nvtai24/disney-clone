import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const API_KEY = "72897c9e00d6e0a63a91be312bb55054";

// https://api.themoviedb.org/3/trending/all/day?api_key=72897c9e00d6e0a63a91be312bb55054
const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + API_KEY
);

const getMovieByGenre = (genreId) =>
  axios.get(
    movieBaseUrl +
      "/discover/movie?api_key=" +
      API_KEY +
      "&with_genres=" +
      genreId
  );

export default {
  getTrendingVideos,
  getMovieByGenre,
};
