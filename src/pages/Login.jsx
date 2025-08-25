import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ValidateMail from "../Components/Validation/ValidateMail";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateForm = () => {
    const isValidateUsername = ValidateMail(email);
    const isValidPassword = validatePassword();

    return isValidPassword && isValidateUsername;
  };

  const validatePassword = () => {
    if (password.length < 8) {
      return false;
    } else {
      return true;
    }
  };

  function LoginApi() {
    const details = {
      email: email,
      password: password,
    };

    if (validateForm()) {
      fetch("https://lms-7czt.onrender.com/auth/login/", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(details),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data.Message === "User Logged In Successfully") {
            let token = data.Token;
            let user = data.User;
            sessionStorage.setItem("Token", token);
            sessionStorage.setItem("User", JSON.stringify(user));
            window.location.reload();
          } else {
            alert(data.Error);
          }
        })
        .catch((error) => console.error("error:", error));
    } else {
      alert("Email or Password is incorrect");
    }
  }

  return (
    <>
      <Container>
        <Content>
          <WBText>Welcome back!</WBText>
          <Entries>
            <EntryContainer>
              <EntryTitle>Email</EntryTitle>
              <Entry
                type="text"
                placeholder="bhlak@gmail.com"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </EntryContainer>

            <EntryContainer>
              <EntryTitle>Password</EntryTitle>
              <Entry
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </EntryContainer>
            <LoginBtn type="submit" onClick={() => LoginApi()}>
              Login
            </LoginBtn>
            <SignupContainer>
              Don't have an account?{" "}
              <a
                onClick={() => navigate("/Signup")}
                style={{ textDecoration: "none", color: "#692b7d" }}
              >
                Sign up
              </a>
            </SignupContainer>
          </Entries>
        </Content>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  box-sizing: border-box;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 15px 0;
  // height: 100vh;
`;

const Entries = styled.div`
  width: 70%;
  box-sizing: border-box;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
`;

const LogoImg = styled.img`
  width: 12%;
  margin-bottom: 2%;
`;

const LoginText = styled.div`
  width: 100%;
  text-align: center;
  color: #370f43;
  font-family: "Quattrocento", serif;
  font-weight: 600;
  font-style: normal;
  font-size: 120%;
`;

const WBText = styled.div`
  width: 100%;
  text-align: center;
  color: #370f43;
  font-family: "Playfair Display", serif;
  font-weight: 500;
  font-style: normal;
  font-size: 180%;
`;

const EntryContainer = styled.div`
  width: 38%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 25%;
  box-sizing: border-box;
  // margin-bottom: 3%;
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
  height: 45%;
  background-color: #fbf6fd;
  border: none;
  border-radius: 5px;
  padding-left: 3%;
  font-size: 70%;
  font-family: "Quattrocento", serif;
  font-weight: 500;
  font-style: normal;
  outline: none;
`;

const LoginBtn = styled.button`
  width: 45%;
  background-color: #7e3299;
  height: 12%;
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

const SignupContainer = styled.div`
  width: fit-content;
  text-align: center;
  font-family: "Quattrocento", serif;
  font-weight: 600;
  font-style: normal;
  font-size: 120%;
`;

export default Login;
