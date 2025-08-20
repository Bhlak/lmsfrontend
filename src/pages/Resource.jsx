import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import book2 from "../assets/bookImage.jpeg";
import BookLoan from "../Components/BookLoan";
import { useNavigate } from "react-router-dom";

const Resource = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { id, author, title, publisher, year_published, available } = state;
  console.log(available);

  const loan = async (id) => {
    let res = await BookLoan(id);
    // console.log(res);
    if (res.Message === "Loan Created Successfully") {
      window.dispatchEvent(new Event("bookUpdate"));
      navigate("/Home", { state: { alert: res.Message } });
    }
  };

  return (
    <ResourceContainer>
      <Image>
        <img src={book2} alt="" />
      </Image>
      <Text>
        <h4>Title: {title}</h4>
        <ul>
          <li>Author: {author}</li>
          <li>Publisher: {publisher}</li>
          <li>Available: {available ? "Yes" : "No"}</li>
        </ul>
        {available ? (
          <BorrowButton onClick={() => loan(id)}>Checkout</BorrowButton>
        ) : (
          <BorrowButton disabled="disabled">Checkout</BorrowButton>
        )}
      </Text>
    </ResourceContainer>
  );
};

export default Resource;

const ResourceContainer = styled.div`
  width: 85%;
  height: 95%;
  padding: 20px;
  box-sizing: border-box;
  align-items: center;
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
`;

const Image = styled.div`
  width: 40%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 0 0.5rem 0.5rem;
  border: 0.5px solid #f5ebfc;
  font-family: "Signika Negative", sans-serif;
  display: flex;
  align-items: center;
  img {
    width: 80%;
    object-fit: contain;
  }
`;

const Text = styled.div`
  display: flex;
  height: 50%;
  width: 60%;
  justify-content: space-around;
  padding: 30px 0;
  flex-direction: column;
  align-items: center;
  ul {
    list-style: none;
    padding: 0;
    font-size: 1.1em;
  }
  li {
    margin-top: 0.5em;
  }
  h4 {
    margin-top: 0.7rem;
    font-size: x-large;
  }
`;

const BorrowButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #f5ebfc;
  border: none;
  border-radius: 20px;
  box-shadow: 3px 3px lightgrey;
`;
