import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { useEffect } from "react";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const upcoming = useSelector((store) => store.movies?.upComingMovies);
  const toprate = useSelector((store) => store.movies?.topRatedMovies);

  if (!movies || !toprate || !upcoming || !popularMovies) return;
  return (
    <div className="bg-black">
      <div className="-mt-[190px] pl-12 relative z-10 ">
        <MovieList title={"Now Playing"} movies={movies} />
        <MovieList title={"Top Rated"} movies={toprate} />
        <MovieList title={"Trending"} movies={movies} />
        <MovieList title={"Up coming Movies"} movies={upcoming} />
        <MovieList title={"Popular Movies"} movies={popularMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
