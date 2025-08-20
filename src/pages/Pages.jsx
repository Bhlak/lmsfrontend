import { Navigate, Routes, Route } from "react-router-dom";
import Home from "./Home";
import BookSearch from "./BookSearch";
import Resource from "./Resource";
import ResourceCreation from "./ResourceCreation";

const Pages = ({ query }) => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Navigate replace to="/Home" />} />
        <Route path={"/Signup"} element={<Navigate replace to="/Home" />} />
        <Route path={"/Login"} element={<Navigate replace to="/Home" />} />
        <Route path={"/Home"} element={<Home query={query} />} />
        {/* <Route path={"/Search"} element={<BookSearch />} /> */}
        <Route path={"/Resource"} element={<Resource />} />
        <Route path={"/ResourceCreation"} element={<ResourceCreation />} />
      </Routes>
    </>
  );
};

export default Pages;
