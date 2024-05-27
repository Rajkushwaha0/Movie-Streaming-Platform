import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";

const GptSearchbar = () => {
  const langKey = useSelector((state) => state.language?.lang);
  return (
    <div className="absolute z-30 w-3/4 mx-auto right-0 left-0 mt-[300px]">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-row mx-44 items-center"
      >
        <input
          type="text"
          placeholder={lang[langKey].gptPlaceholder}
          className="my-4 mx-5 p-4 w-full rounded-md"
        />
        <button className="p-4 w-3/12 rounded-md bg-red-700 text-white font-semibold">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchbar;
