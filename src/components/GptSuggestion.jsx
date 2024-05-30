import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const GptSuggestion = () => {
  const recomMovie = useSelector((store) => store.gpt?.recomMovie);

  return (
    <div className="bg-black px-4  mx-4 bg-opacity-70">
      <div className=" overflow-x-scroll no-scrollbar">
        <MovieList movies={recomMovie} title="" />
      </div>
    </div>
  );
};

export default GptSuggestion;
