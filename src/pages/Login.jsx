// import '../Components/login.css';
// import LoginPic from '../assets/Login.png';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
// import Logo from '../assets/LOGO.png';
// import SignInSignOut from '../Components/Signup/signInsignOut';
import styled from 'styled-components';
import ValidateMail from '../Components/Validation/ValidateMail';

const Login = () => {
  const navigate = useNavigate();
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  let token = sessionStorage.getItem('Token');

  if (token) {
    return <Navigate to='/Home' replace />;
  }

  const validateForm = () => {
    const isValidateUsername = ValidateMail(email);
    const isValidPassword = validatePassword();

    return isValidPassword && isValidateUsername;
  };

//   const validateUsername = () => {
//     if (username === '') {
//       console.log('write a username');
//       return false;
//     } else {
//       return true;
//     }
//   };

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
      fetch('http://127.0.0.1:8000/auth/login/', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(details),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          // navigate("/producthomepage")
          console.log(data);

          if (data.Message === 'User Logged In Successfully') {
            let token = data.Token;
            sessionStorage.setItem('Token', token);
            navigate('/Home');
          } else {
            alert('wrong email or password');
          }
        })
        .catch((error) => console.error('error:', error));
    } else {
      alert('Email or Password is incorrect');
    }
  }

  return (
    <>
      <Container>
        {/* <SignInSignOut /> */}
        <Content>
          {/* <LogoImg src={Logo} alt="chiccloset logo" /> */}
          <LoginText>Login</LoginText>
          <WBText>Welcome back!</WBText>
          <GoogleContainer>
            <div className="flat-color-icons--google"></div>Sign in with google
          </GoogleContainer>

          <Orline>
            <hr />
            or
            <hr />
          </Orline>

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
            Don't have an account?{' '}
            <a
              onClick={() => navigate('/signup')}
              style={{ textDecoration: 'none', color: '#692b7d' }}
            >
              Sign up
            </a>
          </SignupContainer>
        </Content>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const LogoImg = styled.img`
  width: 12%;
  margin-bottom: 2%;
`;

const LoginText = styled.div`
  width: 100%;
  text-align: center;
  color: #370f43;
  font-family: 'Quattrocento', serif;
  font-weight: 600;
  font-style: normal;
  font-size: 120%;
`;

const WBText = styled.div`
  width: 100%;
  text-align: center;
  color: #370f43;
  font-family: 'Playfair Display', serif;
  font-weight: 500;
  font-style: normal;
  font-size: 180%;
`;

const GoogleContainer = styled.div`
  font-size: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 45px;
  background-color: #f5ebfc;
  border-radius: 5px;
  margin-top: 3%;
  font-family: 'Quattrocento', serif;
  font-weight: 400;
  font-style: normal;
  gap: 2%;
`;

const Orline = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 20px;
  color: #d1d1d1;
  margin-top: 3%;
  margin-bottom: 3%;
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
  font-family: 'Quattrocento', serif;
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
  font-family: 'Quattrocento', serif;
  font-weight: 500;
  font-style: normal;
`;

const LoginBtn = styled.button`
  width: 51%;
  background-color: #7e3299;
  height: 8%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f9f9f9;
  font-size: 100%;
  font-family: 'Quattrocento', serif;
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
  font-family: 'Quattrocento', serif;
  font-weight: 600;
  font-style: normal;
  font-size: 120%;
`;

export default Login;
