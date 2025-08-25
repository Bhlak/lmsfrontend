// import LOGO from "../../assets/Frame 4.png"
import "./Sidebar.css";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Logout from "./logout";
// import Loan from "../Components/Loan"
import capitalize from "../Capitalize";

const Sidebar = ({ user }) => {
  const navigate = useNavigate();
  // console.log(user);

  return (
    <SideContainer>
      <div className="acting">
        {user.is_staff ? (
          <div className="actions">
            <PageBtn onClick={() => navigate("/Home")}>
              <div className="mynaui--home "></div>Home
            </PageBtn>
            <PageBtn onClick={() => navigate("/Loan")}>
              <div className="mynaui--loan "></div>Loans
            </PageBtn>
            <PageBtn onClick={() => navigate("/Ban")}>
              <div className="mynaui--ban "></div>Account Ban
            </PageBtn>
            <PageBtn onClick={() => navigate("/ResourceCreation")}>
              <div className="mynaui--book "></div>Resource Creation
            </PageBtn>
            {/* <PageBtn onClick={() => navigate("/ResourceUpdate")}>
              <div className="mynaui--book "></div>Resource Update
            </PageBtn> */}
          </div>
        ) : (
          <div className="actions">
            <PageBtn onClick={() => navigate("/Home")}>
              <div className="mynaui--home "></div>Home
            </PageBtn>
            <PageBtn onClick={() => navigate("/Loan")}>
              <div className="mynaui--loan "></div>Loans
            </PageBtn>
          </div>
        )}
        <div className="actions">
          <Logout></Logout>
          {/* <a href="#" className="activ">
            <div className="lets-icons--setting-line"></div>Settings
          </a>
          <a href="#" className="activ">
            <div className="lucide--messages-square"></div>Support
          </a> */}
          <ProfileContainer>
            {/* <Circle /> */}
            <Profile>
              {/* <div className="prof">{user.matric_no}</div> */}
              {/* <div className="prof"> */}
              {/* {user ? (
                <p>{user.firstname + " " + user.lastname}</p>
              ) : (
                <LoginBtn onClick={() => navigate("/Login")}>Login</LoginBtn>
              )} */}
              <p
                style={{
                  // width: "100%",
                  fontFamily: "Quattrocento",
                  fontWeight: "600",
                  // color: "black",
                }}
              >
                {capitalize(user.firstname) + " " + capitalize(user.lastname)}
              </p>
              {/* </div> */}
            </Profile>
          </ProfileContainer>
        </div>
      </div>
    </SideContainer>
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

  &:hover {
    border-radius: 5px;
    border: none;
    background-color: #ebd7f7;
    color: #692b7d;
  }
`;

const LoginBtn = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background: none;
`;

const SideContainer = styled.div`
  width: 100%;
  padding-top: 40%;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: sticky;
  top: 0;
`;

const ProfileContainer = styled.div`
  background-color: #ebd7f7;
  width: 100%;
  // border-radius: 12px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.4rem;
  box-sizing: border-box;
`;

const Circle = styled.div`
  background-color: lightgrey;
  width: 50px;
  height: 50px;
  background-color: #ffff;
  border-radius: 50%;
`;

const Profile = styled.div`
  // width: 80%;
  padding: 0 0.4rem;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  // border-radius: 20%;
`;
