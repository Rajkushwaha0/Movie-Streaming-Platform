import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const GptSuggestion = () => {
  const recomMovie = useSelector((store) => store.gpt?.recomMovie);

  return (
    <div className="z-50 overflow-x-scroll no-scrollbar">
      <MovieList movies={recomMovie} title="" />
    </div>
  );
};

export default GptSuggestion;
