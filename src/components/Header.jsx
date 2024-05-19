import { USER_AVATAR, logo } from "../utils/constant";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  function handleSignOut() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        navigate("*");
      });
  }
  return (
    <div className="absolute w-screen px-8 py-2  bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44 cursor-pointer" src={logo} alt="" />
      {user && (
        <div className="flex flex-row items-center gap-3">
          <img src={USER_AVATAR} className="w-10 h-10 rounded-[50%]" />
          <button className="text-white font-bold" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
