import { Navigate, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";

const AuthPages = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Navigate replace to="/Login" />} />
        <Route path={"/Signup"} element={<Signup />} />
        <Route path={"/Login"} element={<Login />} />
        <Route path={"/Home"} element={<Navigate replace to="/Login" />} />
        <Route path={"/Search"} element={<Navigate replace to="/Login" />} />
      </Routes>
    </>
  );
};

export default AuthPages;
