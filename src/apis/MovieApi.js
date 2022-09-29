import axios from 'axios';

const MOVIE_API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
const popularMovieApi = `https://api.themoviedb.org/3/movie/popular?api_key=${MOVIE_API_KEY}`;
const nowMovieApi = `https://api.themoviedb.org/3/movie/now_playing?api_key=${MOVIE_API_KEY}`;
const comingMovieApi = `https://api.themoviedb.org/3/movie/upcoming?api_key=${MOVIE_API_KEY}`;
const topMovieApi = `https://api.themoviedb.org/3/movie/top_rated?api_key=${MOVIE_API_KEY}`;

export const getPopularMovieList = async () => {
  try {
    const response = await axios.get(popularMovieApi);
    const homeMovieList = response.data;
    return homeMovieList;
  } catch (error) {
    console.log(error);
  }
};

export const getNowMovieList = async () => {
  try {
    const response = await axios.get(nowMovieApi);
    const nowMovieList = response.data;
    return nowMovieList;
  } catch (error) {
    console.log(error);
  }
};

export const getComingMovieList = async () => {
  try {
    const response = await axios.get(comingMovieApi);
    const comingMovieList = response.data;
    return comingMovieList;
  } catch (error) {
    console.log(error);
  }
};

export const getTopMovieList = async () => {
  try {
    const response = await axios.get(topMovieApi);
    const topMovieList = response.data;
    return topMovieList;
  } catch (error) {
    console.log(error);
  }
};

export const getDetailMovieList = async (id) => {
  const detailMovieApi = `https://api.themoviedb.org/3/movie/${id}?api_key=${MOVIE_API_KEY}`;
  try {
    const response = await axios.get(detailMovieApi);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getSearchMovieList = async (query, page) => {
  const searchMovieApi = `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&query=${query}&page=${page}`;
  try {
    const response = await axios.get(searchMovieApi);
    return response;
  } catch (error) {
    console.log(error);
  }
};
