import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ResourceCreation = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [year_published, setYear] = useState("");

  const CreateApi = async () => {
    const navigate = useNavigate();
    let temp = `${year_published}-01-01`;
    const details = {
      title: title,
      author: author,
      publisher: publisher,
      year_published: temp,
    };

    // if (validateForm()) {
    let token = sessionStorage.getItem("Token");
    let res = await fetch("https://lms-7czt.onrender.com/books/new/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${token}`,
      },
      method: "POST",
      body: JSON.stringify(details),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // navigate("/producthomepage")
        // console.log(data);

        if (data.Message === "Book Created Successfully") {
          //   let token = data.Token;
          //   let user = data.User;
          //   sessionStorage.setItem("Token", token);
          //   // console.log(user);
          //   sessionStorage.setItem("User", JSON.stringify(user));
          //   window.location.reload();
          alert(data.Message);
          navigate("/Home");
        } else {
          alert("Book Creation Failed");
        }
      })
      .catch((error) => console.error("error:", error));
    // } else {
    //   alert("Email or Password is incorrect");
    // }
  };

  return (
    <HomeContainer>
      <Content>
        <EntryContainer>
          <EntryTitle>Title</EntryTitle>
          <Entry
            type="text"
            placeholder="Legend of The Northern Blade"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </EntryContainer>

        <EntryContainer>
          <EntryTitle>Author</EntryTitle>
          <Entry
            type="text"
            placeholder="Hae Min"
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
        </EntryContainer>

        <EntryContainer>
          <EntryTitle>Publisher</EntryTitle>
          <Entry
            type="text"
            placeholder="Penguin Comics"
            onChange={(e) => {
              setPublisher(e.target.value);
            }}
          />
        </EntryContainer>

        <EntryContainer>
          <EntryTitle>Year Published</EntryTitle>
          <Entry
            type="text"
            placeholder="2025"
            onChange={(e) => {
              setYear(e.target.value);
            }}
          />
        </EntryContainer>
        <CreateBtn type="submit" onClick={() => CreateApi()}>
          Create
        </CreateBtn>
      </Content>
      {/* Resources */}
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
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const EntryContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 10%;
  margin-bottom: 3%;
`;

const EntryTitle = styled.p`
  font-size: 90%;
  font-family: "Quattrocento", serif;
  font-weight: 600;
  font-style: normal;
  padding-left: 1%;
`;

const Entry = styled.input`
  width: 98%;
  height: 65%;
  background-color: #fbf6fd;
  border: none;
  border-radius: 5px;
  padding-left: 3%;
  font-size: 70%;
  font-family: "Quattrocento", serif;
  font-weight: 500;
  font-style: normal;
`;

const CreateBtn = styled.button`
  width: 51%;
  background-color: #7e3299;
  height: 8%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f9f9f9;
  font-size: 100%;
  font-family: "Quattrocento", serif;
  font-weight: 600;
  font-style: normal;
  border-radius: 5px;
  border: none;
  margin-top: 4%;
  margin-bottom: 2%;
`;

export default ResourceCreation;
