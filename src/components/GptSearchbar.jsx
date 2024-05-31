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
    try {
      const [res, res2] = await Promise.all([
        axios.get(
          `https://api.themoviedb.org/3/search/movie?query=${text}&include_adult=false&language=en-US&page=1`,
          API_OPTIONS
        ),
        axios.get(
          `https://api.themoviedb.org/3/search/movie?query=${text}&include_adult=false&language=en-US&page=2`,
          API_OPTIONS
        ),
      ]);
      // console.log(res, res2);
      const combineMovie = [...res.data.results, ...res2.data.results];

      dispatch(addRecomMovie(combineMovie));
    } catch {}
  }

  return (
    <div className=" z-50 w-3/4 mx-auto right-0 left-0 pt-[40%] md:pt-[200px]">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full flex flex-row mx-auto items-center"
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
      </form>
    </div>
  );
};

export default GptSearchbar;
