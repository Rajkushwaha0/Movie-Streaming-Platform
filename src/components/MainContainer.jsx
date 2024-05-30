import { useSelector } from "react-redux";
import VedioBG from "./VedioBG";
import VedioTitle from "./VedioTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[3];
  if (!mainMovie) return;
  const { original_title, overview, id, poster_path } = mainMovie;
  //   const { original_title, overview, id } = mainMovie;
  //   console.log(mainMovie.original_title);

  return (
    <div className="overflow-x-hidden">
      <VedioTitle
        title={original_title}
        overview={overview}
        img={poster_path}
      />
      <VedioBG movieId={id} />
    </div>
  );
};
export default MainContainer;
