import axios from "axios";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieByID = async (movieId) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    // console.log(response.data.results);
    const filterTrailer = response.data.results.filter(
      (vedio) => vedio.type == "Trailer"
    );
    const trailer = filterTrailer.length
      ? filterTrailer[0]
      : response.data.results[0];
    // console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieByID(movieId);
  }, []);
};

export default useMovieTrailer;
