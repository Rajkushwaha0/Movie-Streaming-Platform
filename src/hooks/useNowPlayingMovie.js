import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import axios from "axios";

const useNowPlayingMovie = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovie = async (url) => {
    const nowplaying = await axios.get(url, API_OPTIONS);
    dispatch(addNowPlayingMovies(nowplaying.data.results));
  };
  useEffect(() => {
    const url = "https://api.themoviedb.org/3/movie/now_playing?page=1";
    getNowPlayingMovie(url);
  }, []);
};

export default useNowPlayingMovie;
