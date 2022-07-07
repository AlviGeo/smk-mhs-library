import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../components/css/Login.css";

// Alert
import Swal from "sweetalert2";
import { Alert } from "react-bootstrap";

// Import Context
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);

  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  // Show and Hide Password
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .catch((err) => {
        setError(true);
        Swal.fire("", "Login Failed!", "error");
      })
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/");
        window.location.reload();
        Swal.fire("", "Success Login!", "success");
      });
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="col-md-6 d-none d-md-flex bg-image" />
          <div className="col-md-6 bg-light">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-lg-7 col-xl-6 mx-auto">
                    <h3 className="display-4">LOG IN</h3> <br />
                    {error && (
                      <Alert variant="danger">Wrong email or password!</Alert>
                    )}
                    <form onSubmit={handleLogin}>
                      <div className="form-group mb-3">
                        <input
                          type="email"
                          autoFocus
                          className="Email form-control border-0 shadow-sm px-4"
                          placeholder="Email address"
                          required
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className="input-group form-group mb-3">
                        <input
                          type={passwordShown ? "text" : "password"}
                          className="password form-control border-0 shadow-sm px-4 "
                          placeholder="Password"
                          required
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="input-group-prepend cursor-pointer">
                          <span className="input-group-text">
                            <i
                              onClick={togglePassword}
                              className={`fa ${
                                togglePassword ? "fa-eye-slash" : "fa-eye"
                              }`}
                            ></i>
                          </span>
                        </div>
                        <br />
                      </div>

                      <button
                        type="submit"
                        value="login"
                        className="btn btn-warning btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                      >
                        Sign in
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
