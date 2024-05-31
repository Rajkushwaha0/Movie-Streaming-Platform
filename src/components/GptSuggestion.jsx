import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const GptSuggestion = () => {
  const recomMovie = useSelector((store) => store.gpt?.recomMovie);
  if (!recomMovie) return;
  let firstComponent;
  let secondComponent;
  if (recomMovie.length > 20) {
    firstComponent = recomMovie.slice(0, 19);
    secondComponent = recomMovie.slice(20, recomMovie.length - 1);
  }

  return (
    <div className="bg-black px-4  mx-4 bg-opacity-70">
      <div className=" overflow-x-scroll no-scrollbar">
        <MovieList movies={firstComponent} title="" />
        <MovieList movies={secondComponent} title="" />
      </div>
    </div>
  );
};

export default GptSuggestion;
