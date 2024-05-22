import { Routes, Route } from "react-router-dom";
import Browse from "../pages/Browse";
import Login from "../pages/Login";
import Error from "../pages/Error";

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
