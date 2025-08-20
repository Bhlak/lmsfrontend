import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Logout = () => {
  const token = sessionStorage.getItem("Token");

  const navigate = useNavigate();

  const logout = () => {
    if (token) {
      fetch("https://lms-7czt.onrender.com/auth/logout/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${token}`,
        },
        method: "GET",
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          // navigate("/producthomepage")
          // console.log(data);

          if (data.Message === "User Logged Out Successfully") {
            sessionStorage.removeItem("Token");
            sessionStorage.removeItem("User");
            sessionStorage.removeItem("Books");
            window.location.reload();
          } else {
            console.log("Error Logging User Out");
          }
        })
        .catch((error) => console.error("error:", error));
    } else {
      alert("No User Logged In");
    }
  };

  return (
    <LogoutBtn onClick={() => logout()}>
      <GearDiv />
      Logout
    </LogoutBtn>
  );
};

export default Logout;

const LogoutBtn = styled.button`
  width: 100%;
  height: 35px;
  border: none;
  background: none;
  display: flex;
  align-items: center;
  margin-bottom: 3vh;
  font-family: "Quattrocento", serif;
  font-weight: 600;
  color: black;
  &:hover {
    border-radius: 5px;
    background-color: #ebd7f7;
    color: #692b7d;
  }
`;

const GearDiv = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 0px 5px;
  background-image: url("https://unpkg.com/@mynaui/icons/icons/logout.svg");
`;
