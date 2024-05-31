import { BG_URL } from "../utils/constant";
import GptSearchbar from "./GptSearchbar";
import GptSuggestion from "./GptSuggestion";
const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-20">
        <img className="h-screen w-screen object-cover" src={BG_URL} />
      </div>
      <div>
        <GptSearchbar />
        <GptSuggestion />
      </div>
    </>
  );
};

export default GptSearch;
