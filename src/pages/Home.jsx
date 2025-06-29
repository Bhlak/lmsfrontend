import React, { useState, useEffect } from "react";
// import Navbar from "../Components/Navbar/Navbar";
// import Sidebar from "../Components/Sidebar/Sidebar";

const Home = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        let token = sessionStorage.getItem("Token");
        const res = await fetch("http://127.0.0.1:8000/auth/user/", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `token ${token}`,
          },
          method: "GET",
        });

        const data = await res.json();
        // console.log(data)
        setUser(data.Data);
        // console.log(data)
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {/* {/* {user ? <Navbar name={user.firstname} /> : <Navbar />} */} */}
      {/* <Navbar name={user.firstname} /> */}
      {/* <Sidebar user={user} /> */}
      Home
    </>
  );
};

export default Home;
