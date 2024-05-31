import { IMG_CDN_URL } from "../utils/constant";
const VedioTitle = ({ title, overview, img }) => {
  return (
    <div className="absolute pt-[30%]  md:pt-[20%] px-6 md:px-24 bg-gradient-to-r from-black w-screen aspect-video ">
      <h1 className="font-bold text-2xl md:text-4xl text-white">{title}</h1>
      <p className="hidden sm:hidden md:inline-block py-6 text-lg w-1/4 text-white">
        {overview}
      </p>
      <div className="">
        <button className="mt-[10px] md:mt-0 bg-white text-black py-2 px-6  md:px-10 md:py-4 mr-5 cursor-pointer text-lg  rounded-md hover:bg-opacity-80">
          Play Now
        </button>
        <button className="hidden md:inline-block bg-gray-400 py-4 px-10  text-white text-lg font-semibold cursor-pointer bg-opacity-50 rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VedioTitle;
