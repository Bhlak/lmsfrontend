import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Loan = () => {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("User")));
  const [loans, setLoans] = useState([]);
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
      // let resources = data;
      // console.log("Storage");
      // sessionStorage.setItem("Books", JSON.stringify(resources));
      // window.dispatchEvent(new Event("bookStorage"));
      // setFetchedBooks(resources);
      if (data.Message === "Loans Retrieved") {
        // return data.Loans;
        setLoans(data.Loans);
      } else {
        setLoans([]);
      }
    } catch (e) {
      console.log(e);
      setLoans([]);
    }
  };
  // setLoans(fetchLoans());
  // console.log(typeof loans);
  // console.log(loans);

  useEffect(() => {
    fetchLoans();
  }, []);

  return (
    <HomeContainer>
      <Content>
        {loans.map((loan) => {
          return (
            <Card
              key={loan.id}
              // onClick={() => navigate("/Resource", { state: book })}
            >
              {/* <img
                src={bookImage}
                alt=""
                style={{
                  // width: "100%",
                  height: "auto",
                  // maxHeight: "150px",
                  // objectFit: "cover",
                  borderRadius: "10px",
                }}
              /> */}
              <Details>
                <TextSplitter>
                  <Text>Title:</Text>
                  <Text>{loan.book}</Text>
                </TextSplitter>
                <TextSplitter>
                  <Text>Due Date:</Text>
                  <Text>{loan.due_date}</Text>
                </TextSplitter>
                <TextSplitter>
                  <Text>Date Borrowed:</Text>
                  <Text>{loan.date_borrowed}</Text>
                </TextSplitter>
              </Details>
            </Card>
          );
        })}
      </Content>
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

const Card = styled.div`
  // margin: 10px 0 0 2%;
  // background-color: #f5ebfc;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px #f5ebfc;
  padding: 20px 5px;
  width: 70%;
  // flex: 1 0 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  // min-height: 100%;
  min-height: 180px;
  justify-content: space-around;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-height: 80vh;
`;

const Details = styled.div`
  width: 100%;
  // margin-top: 20px;
  max-width: 80%;
  // min-height: fit-content;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
`;

const TextSplitter = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
`;

const Text = styled.p`
  text-align: center;
  font-family: "Quattrocento", Serif;
  font-size: 20px;
  font-weight: 400;
  // margin-top: 20px;
`;

export default Loan;
