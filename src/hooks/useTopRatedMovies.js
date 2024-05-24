import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import axios from "axios";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovie = async (url) => {
    const toprate = await axios.get(url, API_OPTIONS);
    console.log(toprate);
    dispatch(addTopRatedMovies(toprate.data.results));
  };
  useEffect(() => {
    const url = "https://api.themoviedb.org/3/movie/top_rated";
    getPopularMovie(url);
  }, []);
};

export default useTopRatedMovies;
