import { useDispatch, useSelector } from "react-redux";
import { addUpComingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import axios from "axios";

const useUpcomingMovie = () => {
  const dispatch = useDispatch();
  const getMovie = useSelector((store) => store.movies?.upComingMovies);
  const getPopularMovie = async (url) => {
    const upcoming = await axios.get(url, API_OPTIONS);
    // console.log(upcoming);
    dispatch(addUpComingMovies(upcoming.data.results));
  };
  useEffect(() => {
    const url = "https://api.themoviedb.org/3/movie/upcoming";
    if (!getMovie) getPopularMovie(url);
  }, []);
};

export default useUpcomingMovie;
