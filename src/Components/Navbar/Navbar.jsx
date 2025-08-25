// import { react } from "react";
import { useState, useEffect } from "react";
import "./Navbar.css";
import styled from "styled-components";
import capitalize from "../Capitalize";

function Navbar({ user, setQuery }) {
  // const [query, setQuery] = useState("");
  // const [fetchedBooks, setFetchedBooks] = useState({});

  const fetchBooks = async (query = null) => {
    // console.log("Fetching");
    try {
      let token = sessionStorage.getItem("Token");
      const res = await fetch(
        `https://lms-7czt.onrender.com/books/search/?search=""`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `token ${token}`,
          },
          method: "GET",
        }
      );

      const data = await res.json();
      // console.log(data);
      // console.log(data);
      let resources = data;
      // console.log("Storage");
      sessionStorage.setItem("Books", JSON.stringify(resources));
      window.dispatchEvent(new Event("bookStorage"));
      // setFetchedBooks(resources);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchBooks();

    window.addEventListener("bookUpdate", fetchBooks);
    // console.log("updated");

    return () => window.removeEventListener("bookUpdate", fetchBooks);
  }, []);

  let name = user.firstname;
  const userName = capitalize(name);

  return (
    <NavBar>
      {name ? (
        <Greeting>Hello, {userName}</Greeting>
      ) : (
        <Greeting>Hey There, Friend</Greeting>
      )}
      <div className="shopbells">
        <input
          type="text"
          className="searching"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
        {/* <div className="gg--shopping-cart"></div>
        <div className="mage--notification-bell"></div> */}
      </div>
    </NavBar>
  );
}

export default Navbar;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // padding-top: 15px;
  border: none;
  height: 5%;
  padding: 0.4rem 0;
  background-color: white;
  box-shadow: 0 0px 0.6px 0px lightgrey;
  position: sticky;
  top: 0;
  right: 0;
  width: 85%;
  z-index: 100;
`;

const Greeting = styled.p`
  font-family: quattrocento;
  padding-left: 20px;
  font-weight: 700;
  font-size: 20px;
`;
