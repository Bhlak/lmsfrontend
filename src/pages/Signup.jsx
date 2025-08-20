import { Navigate, useNavigate } from "react-router-dom";
import "../Components/Signup/signup.css";
import { useState } from "react";
// import SignInSignOut from '../Components/Signup/signInsignOut';
import ValidateMail from "../Components/Validation/ValidateMail";

const SignUp = () => {
  const navigate = useNavigate();
  // const location = useLocation()
  // const user = location.state.user

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  // State variables for managing form inputs and visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  //   const [address, setAddress] = useState('');
  const [number, setNumber] = useState("");
  //   const [username, setUsername] = useState('');
  //   const [option, setOption] = useState('');
  // console.log("user",user);

  let token = sessionStorage.getItem("Token");
  if (token) {
    return <Navigate to="/Home" replace />;
  }

  //   function checkEmail(mail) {
  //     const re =
  //       /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //     return re.test(mail);
  //   }
  function checkNumber(number) {
    const re = /^[0-9]{6}-[0-9]{4}$/;
    return re.test(number);
  }

  // let param =useParams()

  // console.log("param",param);

  // fullname validation

  const validateFirstName = () => {
    if (firstName === "") {
      console.log("write a name");
      return false;
    } else {
      //   console.log('valid');

      return true;
    }
  };

  const validateLastName = () => {
    if (lastName === "") {
      console.log("write a name");
      return false;
    } else {
      //   console.log('valid');

      return true;
    }
  };

  // number Validation
  const validateNumber = () => {
    if (number === "") {
      console.log("write an number");
      return false;
    } else if (!checkNumber(number)) {
      console.log("wrong");

      return false;
    } else {
      //   console.log('valid');
      return true;
    }
  };

  // Email validation

  //   const validateEmail = () => {
  //     if (email === '') {
  //       // setError(email, "Enter valid email");
  //       console.log('email false');
  //       return false;
  //     } else if (!checkEmail(email)) {
  //       // setError(email, "Please enter a valid email address");
  //       console.log('email false');
  //       return false;
  //     } else {
  //       // setSuccess(email);
  //     //   console.log('email true');
  //       return true;
  //     }
  //   };

  // Password Validation
  const validatePassword = () => {
    if (password.length < 8) {
      return false;
    } else {
      return true;
    }
  };
  const validateConfirmPassword = () => {
    if (password === confirm) {
      return true;
    } else {
      return false;
    }
  };

  //State Validation

  // Form Validation

  function validateForm() {
    const isValidEmail = ValidateMail(email);
    console.log(isValidEmail);
    const isValidFirstName = validateFirstName();
    console.log(isValidFirstName);
    const isValidLastName = validateLastName();
    console.log(isValidLastName);
    const isValidPassword = validatePassword();
    console.log(isValidPassword);
    const isValidConfirmPassword = validateConfirmPassword();
    console.log(isValidConfirmPassword);
    const isValidNumber = validateNumber();
    console.log(isValidNumber);

    return (
      isValidConfirmPassword &&
      isValidEmail &&
      isValidFirstName &&
      isValidLastName &&
      isValidPassword &&
      isValidNumber
    );
  }

  return (
    <>
      <div className="container">
        {/* <SignInSignOut /> */}

        <div className="content">
          <div className="text3">SIGN UP</div>
          <div className="text4">Create an account</div>
          <div className="or">
            <hr />
            or
            <hr />
          </div>

          <div className="form">
            <p className="text5">Email</p>
            <input
              type="text"
              id="email"
              className="details"
              onChange={(e) => {
                setEmail(e.target.value);
                ValidateMail(email);
              }}
              placeholder="jeffdan@gmail.com"
            />
          </div>

          <div className="form">
            <p className="text5">Firstname</p>
            <input
              type="text"
              id="firstname"
              name="firstname"
              onChange={(e) => {
                setFirstName(e.target.value);
                validateFirstName();
              }}
              className="details"
              placeholder="Name"
            />
          </div>

          <div className="form">
            <p className="text5">Lastname</p>
            <input
              type="text"
              id="lastname"
              name="lastname"
              onChange={(e) => {
                setLastName(e.target.value);
                validateLastName();
              }}
              className="details"
              placeholder="Name"
            />
          </div>

          <div className="form">
            <p className="text5">Matric Number</p>
            <input
              type="text"
              id="number"
              className="details"
              onChange={(e) => {
                setNumber(e.target.value);
                validateNumber();
              }}
            />
          </div>
          <div className="form">
            <p className="text5">Password</p>
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="details"
                onChange={(e) => {
                  setPassword(e.target.value);
                  validatePassword();
                }}
                placeholder="Password"
              />
              <i
                className={`bx ${
                  showPassword ? "bxs-show" : "bxs-low-vision"
                } eye`}
                onClick={() => setShowPassword((prev) => !prev)}
                style={{ cursor: "pointer" }}
              ></i>
            </div>
          </div>

          <div className="form">
            <p className="text5">Confirm Password</p>
            <div style={{ position: "relative" }}>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confPassword"
                className="details"
                onChange={(e) => {
                  setConfirm(e.target.value);
                  validateConfirmPassword();
                }}
                placeholder="Password"
              />

              <i
                className={`bx ${
                  showConfirmPassword ? "bxs-show" : "bxs-low-vision"
                } eye`}
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                style={{ cursor: "pointer" }}
              ></i>
            </div>
          </div>

          <button
            type="submit"
            id="continue"
            className="sign"
            onClick={() => {
              console.log(validateForm());

              const details = {
                firstname: firstName,
                lastname: lastName,
                email: email,
                password: password,
                matric_no: number,
              };
              if (validateForm()) {
                // let details = valueRead(user)
                fetch("http://127.0.0.1:8000/signup/new/", {
                  headers: {
                    "Content-Type": "application/json",
                  },
                  method: "POST",
                  body: JSON.stringify(details),
                })
                  .then((res) => {
                    console.log(res.username);
                    return res.json();
                  })
                  .then((data) => {
                    console.log(data);
                    if (
                      data.Message === "User Created And Logged In Successfully"
                    ) {
                      let token = data.Token;
                      let user = data.User;

                      sessionStorage.setItem("Token", token);
                      sessionStorage.setItem("User", JSON.stringify(user));
                      window.location.reload();
                    } else {
                      alert("failed");
                    }
                  })
                  .catch((error) => console.error("error:", error));
              } else {
                alert("Email or Password is incorrect");
              }
            }}
          >
            Continue
          </button>
          <div className="login">
            Have an account?{" "}
            <button onClick={() => navigate("/Login")}>Login</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;
