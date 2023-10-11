// key=960df50fab88dd241173068e842d695e;
// URL=https://api.themoviedb.org/3/genre/movie/list

import axios from "axios";

const BASE_URL='https://api.themoviedb.org/3';
const API_KEY = '960df50fab88dd241173068e842d695e';

axios.defaults.params = {
    api_key: API_KEY,
};

export async function getMovies() {
    return (await axios.get(`${BASE_URL}/trending/all/day`)).data;
  }
  
  export async function getMoveDetails(id) {
    return (await axios.get(`${BASE_URL}/movie/${id}`)).data;
  }
  // 'https://api.themoviedb.org/3/movie/movie_id/credits?language=en-US'
  
  export async function getCastMovie(id) {
    return (await axios.get(`${BASE_URL}/movie/${id}/credits`)).data;
  }
  // /movie/{movie_id}/reviews
  
  export async function getReviewMovie(id) {
    return (await axios.get(`${BASE_URL}/movie/${id}/reviews`)).data;
  }
  
  // ('https://api.themoviedb.org/3/search/movie?query=cat&include_adult=false&language=en-US&page=1');
  
  export async function getSearchMovies(queryText, page = 1) {
    return (
      await axios.get(`${BASE_URL}/search/movie?query=${queryText}&page=${page}`)
    ).data;
  }

// export async function fetchTopMovies() {
//   const end_point = '/trending/movie/week';
//   const par = new URLSearchParams({
//     api_key: API_KEY,
//   });

//   const url = `${BASE_URL}${end_point}?${par}`;

//   const responce = await axios.get(url);
//   return responce.data;
// }

// export async function fetchMovies(query = '', page = 1) {
//   const end_point = '/search/movie';

//   const par = new URLSearchParams({
//     api_key: API_KEY,
//     query: query,
//     page: page,
//   });

//   const url = `${BASE_URL}${end_point}?${par}`;

//   const responce = await axios.get(url);
//   return responce.data;
// }

// export async function fetchMovieById(id = '') {
//   const end_point = `/movie/${id}`;

//   const par = new URLSearchParams({
//     api_key: API_KEY,
//   });

//   const url = `${BASE_URL}${end_point}?${par}`;

//   const responce = await axios.get(url);
//   return responce.data;
// }

// export async function fetchMovieCreditsById(id = '') {
//   const end_point = `/movie/${id}/credits`;

//   const par = new URLSearchParams({
//     api_key: API_KEY,
//   });

//   const url = `${BASE_URL}${end_point}?${par}`;

//   const responce = await axios.get(url);
//   return responce.data;
// }

// export async function fetchMovieReviewsById(id = '') {
//   const end_point = `/movie/${id}/reviews`;

//   const par = new URLSearchParams({
//     api_key: API_KEY,
//   });

//   const url = `${BASE_URL}${end_point}?${par}`;

//   const responce = await axios.get(url);
//   return responce.data;
// }