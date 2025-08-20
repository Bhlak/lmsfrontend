import React from "react";
import styled from "styled-components";

const Loan = () => {
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
