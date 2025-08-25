import "./App.css";
import Pages from "./pages/Pages.jsx";
import AuthPages from "./pages/AuthPages.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import styled from "styled-components";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(sessionStorage.getItem("Token"));
  const [user, setUser] = useState(
    sessionStorage.getItem("User")
      ? JSON.parse(sessionStorage.getItem("User"))
      : null
  );
  const [query, setQuery] = useState("");

  return (
    <Router basename={process.env.PUBLIC_URL}>
      {token ? (
        <PageContainer>
          <div style={{ width: "15%" }}>
            <Sidebar user={user} />
          </div>
          <BodyContainer>
            <Navbar user={user} setQuery={setQuery} />
            <Pages query={query} />
          </BodyContainer>
        </PageContainer>
      ) : (
        <PageContainer>
          <AuthPages />
        </PageContainer>
      )}
    </Router>
  );
}

export default App;

const PageContainer = styled.div`
  max-width: 100vw;
  height: 100vh;
  display: flex;
  box-sizing: content-box;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  min-height: 100%;
`;
