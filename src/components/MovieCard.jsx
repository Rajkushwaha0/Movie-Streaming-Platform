import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ poster }) => {
  return (
    <div className="w-36 md:w-48 pr-4 cursor-pointer">
      <img alt="Loading" src={IMG_CDN_URL + poster} />
    </div>
  );
};

export default MovieCard;
