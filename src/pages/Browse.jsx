import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import Header from "../components/Header";
import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovie";
import useUpcomingMovie from "../hooks/useUpcomingMovie";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import GptSearch from "../components/GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGPT = useSelector((state) => state.gpt?.showGPTSearch);
  useNowPlayingMovie();
  usePopularMovies();
  useUpcomingMovie();
  useTopRatedMovies();
  return (
    <div>
      <Header />
      {showGPT ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
