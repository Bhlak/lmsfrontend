import React, { useState } from "react";
import styled from "styled-components";

const Loan = () => {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("User")));
  const fetchLoans = async () => {
    // console.log("Fetching");
    try {
      let token = sessionStorage.getItem("Token");
      const details = {
        email: user.email,
      };
      const res = await fetch(`https://lms-7czt.onrender.com/books/loans/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${token}`,
        },
        method: "POST",
        body: JSON.stringify(details),
      });

      const data = await res.json();
      // console.log(data);
      console.log(data);
      let resources = data;
      // console.log("Storage");
      sessionStorage.setItem("Books", JSON.stringify(resources));
      window.dispatchEvent(new Event("bookStorage"));
      // setFetchedBooks(resources);
    } catch (e) {
      console.log(e);
    }
  };
  fetchLoans();
  return (
    <HomeContainer>
      <Content>Loaning</Content>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  width: 100%;
  height: 95%;
  padding: 20px;
  overflow-y: auto;
  box-sizing: border-box;
  // position: absolute;
  // right: 0;
  // bottom: 0;
  //   position: absolute;
  //   right: 0;
  //   bottom: 0;
  //   display: flex;
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export default Loan;
