import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import bookImage from "../assets/bookImage.jpeg";
import Updating from "../Components/Updating";

const ResourceUpdate = () => {
  const [resources, setResources] = useState(
    JSON.parse(sessionStorage.getItem("Books"))
  );
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [year_published, setYear] = useState("");
  const { state } = useLocation();

  //   console.log(state);
  let id = state.book.id;
  let author1 = state.book.author;
  let title1 = state.book.title;
  let publisher1 = state.book.publisher;
  let year_published1 = state.book.year_published;
  console.log(!title);

  //   const { id, author1, title1, publisher1, year_published1 } = state;

  const navigate = useNavigate();

  const UpdateApi = async () => {
    // let temp = `${year_published}-01-01`;
    if (!title) {
      setTitle(title1);
    }
    if (!author) {
      setAuthor(author1);
    }
    if (!publisher) {
      setPublisher(publisher1);
    }
    if (!year_published) {
      setYear(year_published1);
    }
    const details = {
      title: title,
      author: author,
      publisher: publisher,
      year_published: year_published,
    };

    try {
      let token = sessionStorage.getItem("Token");
      let res = await fetch(`https://lms-7czt.onrender.com/books/book/${id}/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${token}`,
        },
        method: "PATCH",
        body: JSON.stringify(details),
      });
      const data = await res.json();

      if (data.Message === "Book Updated Successfully") {
        alert(data.Message);
        navigate("/Home");
      } else {
        alert("Book Update Failed");
      }
    } catch (error) {
      console.error("error:", error);
    }
  };

  return (
    <HomeContainer>
      <Content>
        {id}
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
        <CreateBtn type="submit" onClick={() => UpdateApi()}>
          Update
        </CreateBtn>
      </Content>
      {/* Resources */}
    </HomeContainer>
  );
  //   );
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

const ResourceContainer = styled.div`
  min-height: 100%;
  height: fit-content;
  // font-family: Quattrocento;
  // font-size: 24px;
  // font-weight: 700;
  // margin-top: 20px;
`;

const ResourceHeader = styled.p`
  font-family: Quattrocento;
  font-size: 24px;
  font-weight: 700;
  margin-top: 20px;
`;

const ResourceDisplay = styled.div`
  // border: lightgrey;
  border-radius: 4px;
  display: flex;
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
  box-shadow: 0.6px 0 0.6px 0px lightgrey;
  // border-top: 0.3px;
  // width: 100%;
  height: fit-content;
  padding: 10px;
  // position: relative;
  box-sizing: border-box;

  // padding: 1rem 1rem 3.5rem 1rem;

  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1%;
  width: 100%;
  // padding-left: 1rem;
  // padding-top: 1rem;
`;

const Card = styled.div`
  margin: 10px 0 0 2%;
  // background-color: #f5ebfc;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px #f5ebfc;
  padding: 20px 5px;
  width: 16%;
  // flex: 1 0 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: fit-content;
  justify-content: space-between;
`;

const Details = styled.div`
  width: 100%;
  margin-top: 20px;
  height: 60px;
  max-width: 80%;
  min-height: fit-content;
`;

const Text = styled.p`
  text-align: center;
  font-family: "Quattrocento", Serif;
  font-size: 20px;
  font-weight: 400;
  // margin-top: 20px;
`;

export default ResourceUpdate;
