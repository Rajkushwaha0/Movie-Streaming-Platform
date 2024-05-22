import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import Header from "../components/Header";
import MainContainer from "../components/MainContainer";
const Browse = () => {
  useNowPlayingMovie();

  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  );
};

export default Browse;
