import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Message, useToaster } from "rsuite";
import { loginAdmin } from "../../Redux/Actions/AdminLoginAction";

const Login = () => {
  const toaster = useToaster();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAdmin(loginData.email, loginData.password))
      .then((res) => {
        if (res.success === true) {
          toaster.push(
            <Message type={"success"} closable>
              <p className="fs-6">{res.message}</p>
            </Message>,
            { placement: "topEnd", duration: 2000 }
          );
          navigate("/contacts");
        } else {
          toaster.push(
            <Message type={"success"} closable>
              <p className="fs-6">{res.message}</p>
            </Message>,
            { placement: "topEnd", duration: 2000 }
          );
        }
      })
      .catch((err) => {
        toaster.push(
          <Message type={"success"} closable>
            <p className="fs-6">Server is not Responding.</p>
          </Message>,
          { placement: "topEnd", duration: 2000 }
        );
      });
  };

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      navigate("/contacts");
    }
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <section className="login-section d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="login-wrap">
            <h3>Login to your account</h3>
            <p>Enter your information below to log in</p>
            <form onSubmit={handleLoginSubmit}>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  placeholder="Please Enter your Email"
                  id="email"
                  name="email"
                  value={loginData.email}
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Password</label>
                <div className="password-box position-relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="*********"
                    id="password"
                    name="password"
                    value={loginData.password}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                  <span
                    className="iconsax pwd-show-hide"
                    icon-name={showPassword ? "eye" : "eye-slash"}
                    onClick={togglePasswordVisibility}
                    style={{ cursor: "pointer" }}
                  ></span>
                </div>
                <a href="#" className="d-block forgot-pw">
                  Forgot Password?
                </a>
              </div>
              <div className="login-btns">
                <button type="submit" className="btn w-100">
                  Sign in
                </button>
              </div>
              {/* <h6>
                Don’t have an Account? <a href="#">Sign up</a>
              </h6> */}
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
