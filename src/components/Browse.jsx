import Header from "./Header";
import axios from "axios";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

const Browse = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovie = async (url) => {
    const nowplaying = await axios.get(url, API_OPTIONS);
    console.log(nowplaying.data.results);
    dispatch(addNowPlayingMovies(nowplaying.data.results));
  };
  useEffect(() => {
    const url = "https://api.themoviedb.org/3/movie/now_playing?page=1";
    getNowPlayingMovie(url);
  }, []);
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
