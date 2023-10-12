import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '960df50fab88dd241173068e842d695e';

axios.defaults.params = {
  api_key: API_KEY,
};

// 1. Get list of popular movies on today (tranding on today) https://api.themoviedb.org/3/trending/movie/{time_window}

export async function getMovies() {
  return (await axios.get(`${BASE_URL}/trending/movie/day`)).data;
}

// 2. Search for movies by their original, translated and alternative titles.
// https://api.themoviedb.org/3/search/movie
// ('https://api.themoviedb.org/3/search/movie?query=cat&include_adult=false&language=en-US&page=1');

export async function getSearchMovies(queryText, page = 1) {
  return (
    await axios.get(`${BASE_URL}/search/movie?query=${queryText}&page=${page}`)
  ).data;
}

// 3. Get the top level details of a movie by ID.
// https://api.themoviedb.org/3/movie/{movie_id}
// 'https://api.themoviedb.org/3/movie/movie_id/credits?language=en-US'

export async function getMoveDetails(id) {
  return (await axios.get(`${BASE_URL}/movie/${id}`)).data;
}

// 4. Get the data by actors.
// https://api.themoviedb.org/3/movie/{movie_id}/credits

export async function getCastMovie(id) {
  return (await axios.get(`${BASE_URL}/movie/${id}/credits`)).data;
}

// // 5. Get the user reviews for a movie.
// https://api.themoviedb.org/3/movie/{movie_id}/reviews
// /movie/{ movie_id } /reviews

export async function getReviewMovie(id) {
  return (await axios.get(`${BASE_URL}/movie/${id}/reviews`)).data;
}
