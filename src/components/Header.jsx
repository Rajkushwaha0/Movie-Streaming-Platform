import { USER_AVATAR, logo } from "../utils/constant";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/congifSlice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const RecomSearch = useSelector((store) => store.gpt?.showGPTSearch);
  function handleGPTSearch() {
    //Toggle GPT search btn
    dispatch(toggleGptSearch());
  }
  function handleLanguageChange(e) {
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  }
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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browser");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //this will be called when component unmounts
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black  z-10 flex flex-col  md:flex-row md:justify-between">
      <img className="w-44 cursor-pointer mx-auto md:mx-0" src={logo} alt="" />
      {user && (
        <div className="flex flex-row items-center justify-center gap-3">
          {RecomSearch && (
            <select
              className="px-4 py-2 bg-gray-700 text-white rounded-lg"
              onChange={handleLanguageChange}
            >
              <option value="en">English</option>
              <option value="hin">Hindi</option>
              <option value="span">Spanish</option>
            </select>
          )}
          <button
            className="px-4 py-2 mx-2 rounded-lg text-white bg-blue-600"
            onClick={handleGPTSearch}
          >
            {RecomSearch ? "Homepage" : "Search"}
          </button>
          <p className="text-white">
            {user && user.displayName && `Welcome, ${user.displayName}`}
          </p>
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
