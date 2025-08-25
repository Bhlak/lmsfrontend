import { Navigate, Routes, Route } from "react-router-dom";
import Home from "./Home";
import BookSearch from "./BookSearch";
import Resource from "./Resource";
import ResourceCreation from "./ResourceCreation";
import ResourceUpdate from "./ResourceUpdate";
import Loan from "./Loan";
import Ban from "./Ban";

const Pages = ({ query }) => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Navigate replace to="/Home" />} />
        <Route path={"/Signup"} element={<Navigate replace to="/Home" />} />
        <Route path={"/Login"} element={<Navigate replace to="/Home" />} />
        <Route path={"/Home"} element={<Home query={query} />} />
        <Route path={"/Resource"} element={<Resource />} />
        <Route path={"/ResourceCreation"} element={<ResourceCreation />} />
        <Route path={"/ResourceUpdate"} element={<ResourceUpdate />} />
        <Route path={"/Loan"} element={<Loan />} />
        <Route path={"/Ban"} element={<Ban />} />
      </Routes>
    </>
  );
};

export default Pages;
