import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = 'd783920aea034ba2adae6031a0bf96c0';

async function getTrends(page) {
  try {
    const response = await axios.get(`${BASE_URL}/trending/movie/day`, {
      params: {
        api_key: KEY,
        page,
      },
    });
    const trends = response.data.map(({
      title,
      id,
      poster_path,
      vote_average,
    }) => {return {title, id, poster_path, vote_average}} );
    return trends;
  } catch (error) {
    console.log(error);
  }
}

export default getTrends;
