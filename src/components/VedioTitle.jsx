import { IMG_CDN_URL } from "../utils/constant";
const VedioTitle = ({ title, overview, img }) => {
  return (
    <div className="absolute  pt-[20%] px-24 bg-gradient-to-r from-black w-screen aspect-video ">
      <h1 className="font-bold text-4xl text-white">{title}</h1>
      <p className="py-6 text-lg w-1/4 text-white">{overview}</p>
      <div className="">
        <button className=" bg-white text-black  px-10 p-4 mr-5 cursor-pointer text-lg  rounded-md hover:bg-opacity-80">
          Play Now
        </button>
        <button className="bg-gray-400 p-4 px-10  text-white text-lg font-semibold cursor-pointer bg-opacity-50 rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VedioTitle;
