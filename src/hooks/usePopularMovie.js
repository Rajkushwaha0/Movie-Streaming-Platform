import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import axios from "axios";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovie = async (url) => {
    const popular = await axios.get(url, API_OPTIONS);
    // console.log(popular);
    dispatch(addPopularMovies(popular.data.results));
  };
  useEffect(() => {
    const url = "https://api.themoviedb.org/3/movie/popular";
    getPopularMovie(url);
  }, []);
};

export default usePopularMovies;
