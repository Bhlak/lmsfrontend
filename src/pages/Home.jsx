import React, { useState, useEffect } from "react";
import styled from "styled-components";
import bookImage from "../assets/bookImage.jpeg";
import { useNavigate } from "react-router-dom";

const Home = ({ query = null }) => {
  const navigate = useNavigate();

  const [resources, setResources] = useState(
    JSON.parse(sessionStorage.getItem("Books"))
  );

  useEffect(() => {
    getBooks(query);

    const handleStorage = () => {
      setResources(JSON.parse(sessionStorage.getItem("Books")));
    };

    window.addEventListener("bookStorage", handleStorage);
    return () => window.removeEventListener("bookStorage", handleStorage);
  }, []);
  const getBooks = (query = null) => {
    if (!resources && sessionStorage.getItem("Books")) {
      setResources(JSON.parse(sessionStorage.getItem("Books")));
    }
    if (!query) {
      return resources;
    }
    return resources.filter(
      (book) =>
        book.title.includes(query) ||
        book.author.includes(query) ||
        book.publisher.includes(query) ||
        book.year_published.includes(query)
    );
  };

  const filteredResources = getBooks(query);

  return filteredResources ? (
    <HomeContainer>
      <ResourceContainer>
        <ResourceHeader>All Resources</ResourceHeader>
        <ResourceDisplay>
          <CardContainer>
            {filteredResources.map((book) => {
              return (
                <Card
                  key={book.id}
                  onClick={() => navigate("/Resource", { state: book })}
                >
                  <img
                    src={bookImage}
                    alt=""
                    style={{
                      height: "auto",
                      borderRadius: "10px",
                    }}
                  />
                  <Details>
                    <Text>{book.title}</Text>
                    <Text>{book.author}</Text>
                  </Details>
                </Card>
              );
            })}
          </CardContainer>
        </ResourceDisplay>
      </ResourceContainer>
    </HomeContainer>
  ) : (
    <HomeContainer>Empty</HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  width: 100%;
  height: 95%;
  padding: 20px;
  overflow-y: auto;
  box-sizing: border-box;
  // position: absolute;
  // right: 0;
  // bottom: 0;
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
  text-align: center;
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
