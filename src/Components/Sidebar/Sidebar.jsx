// import LOGO from "../../assets/Frame 4.png"
import "./Sidebar.css";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Logout from "./logout";

const Sidebar = ({ user }) => {
  const navigate = useNavigate();

  return (
    <div className="sidepiece">
      <div className="acting">
        <div className="actions">
          <a className="activ">
            <div className="mynaui--home "></div>Home
          </a>
          <a className="activ">
            <div className="bx--category"></div>Catergories
          </a>
          <PageBtn onClick={() => navigate("/Search")}>
            <div className="gg--shopping-cart"></div>Book Search
          </PageBtn>
          <a href="#" className="activ">
            <div className="wi--time-4"></div>Order History
          </a>
        </div>
        <div className="actions">
          <Logout></Logout>
          <a href="#" className="activ">
            <div className="lets-icons--setting-line"></div>Settings
          </a>
          <a href="#" className="activ">
            <div className="lucide--messages-square"></div>Support
          </a>
          <div className="profiling">
            {/* <div className="prof">{user.matric_no}</div> */}
            <div className="prof">
              {user ? (
                <p>{user.firstname + " " + user.lastname}</p>
              ) : (
                <LoginBtn onClick={() => navigate("/Login")}>Login</LoginBtn>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;

const PageBtn = styled.button`
  width: 100%;
  height: 35px;
  display: flex;
  border: none;
  background: none;
  align-items: center;
  margin-bottom: 3vh;
  font-family: "Quattrocento", serif;
  font-weight: 600;
  color: black;
`;

const LoginBtn = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background: none;
`;
