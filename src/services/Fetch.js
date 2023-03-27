import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const KEY = 'd783920aea034ba2adae6031a0bf96c0';

export async function fetchMovies(endpoint, feature) {
  const ENDPOINTS = {
    trends: `/trending/movie/day?page=${feature[0]}`,
    query: `/search/movie?page=${feature[0]}&query=${feature[1]}`,
    movie: `/movie/${feature[0]}`,
    cast: `/movie/${feature[0]}/credits`,
    reviews: `/movie/${feature[0]}/reviews}`,
    person: `/person/${feature[0]}`,
    genres: `/genre/movie/list`,
  };

  return await axios.get(`${ENDPOINTS[endpoint]}`, {
    params: {
      api_key: KEY,
    },
  });

}



