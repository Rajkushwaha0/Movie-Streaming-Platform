import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import Header from "../components/Header";
import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovie";
import useUpcomingMovie from "../hooks/useUpcomingMovie";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
const Browse = () => {
  useNowPlayingMovie();
  usePopularMovies();
  useUpcomingMovie();
  useTopRatedMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
