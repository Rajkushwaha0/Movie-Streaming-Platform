import { Routes, Route } from "react-router-dom";
import Browse from "../components/Browse";
import Login from "../components/Login";
import Error from "../components/Error";

function MainRouting() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/browser" element={<Browse />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default MainRouting;
