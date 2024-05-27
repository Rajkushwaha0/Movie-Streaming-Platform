import { BG_URL } from "../utils/constant";
import GptSearchbar from "./GptSearchbar";
import GptSuggestion from "./GptSuggestion";
const GptSearch = () => {
  return (
    <div>
      <div className="absolute w-screen">
        <img src={BG_URL} />
      </div>
      <GptSearchbar />
      <GptSuggestion />
    </div>
  );
};

export default GptSearch;
