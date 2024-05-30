import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import { useRef } from "react";
import useDebounce from "../hooks/useDebounce";
import axios from "axios";
import { API_OPTIONS } from "../utils/constant";
import { addRecomMovie } from "../utils/gptSlice";

const GptSearchbar = () => {
  const langKey = useSelector((state) => state.language?.lang);
  const inputText = useRef(null);
  const dispatch = useDispatch();
  async function handleDebounceFunction() {
    const text = inputText.current.value;
    if (text == "") {
      dispatch(addRecomMovie(null));
      return;
    }
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${text}`,
      API_OPTIONS
    );
    dispatch(addRecomMovie(res.data.results));
  }
  return (
    <div className=" z-50 w-3/4 mx-auto right-0 left-0 pt-[200px]">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-row mx-44 items-center"
      >
        <input
          type="text"
          placeholder={lang[langKey].gptPlaceholder}
          className="my-4 mx-5 p-4 w-full rounded-md"
          ref={inputText}
          onChange={useDebounce(() => {
            handleDebounceFunction();
          })}
        />
        {/* <button className="p-4 w-3/12 rounded-md bg-red-700 text-white font-semibold">
          {lang[langKey].search}
        </button> */}
      </form>
    </div>
  );
};

export default GptSearchbar;
