// import { useState } from 'react';
import "./App.css";
import Pages from "./pages/Pages.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import styled from "styled-components";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Router>
      <PageContainer>
        <div style={{ width: "20%" }}>
          <Sidebar />
        </div>
        <div style={{ width: "80%" }}>
          <Navbar />
          <Pages />
        </div>
      </PageContainer>
    </Router>
  );
}

export default App;

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  /* border: 1px solid yellow; */
  display: flex;
  justify-content: space-between;
`;
