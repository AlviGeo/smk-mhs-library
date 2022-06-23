import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";

// Alert
import Swal from "sweetalert2";

// Import Context
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/");
        window.location.reload();
      })
      .then(Swal.fire("", "Success Login!", "success"))
      .catch((err) => {
        setError(true);
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
                    <h3 className="display-4">LOGIN</h3> <br />
                    {error && (
                      <Alert variant="danger">Wrong email or password!</Alert>
                    )}
                    <form onSubmit={handleLogin}>
                      <div className="form-group mb-3">
                        <input
                          type="email"
                          autoFocus
                          className="Email form-control rounded-pill border-0 shadow-sm px-4"
                          placeholder="Email address"
                          required
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className="form-group mb-3">
                        <input
                          type="password"
                          className="password form-control rounded-pill border-0 shadow-sm px-4 text-danger"
                          placeholder="Password"
                          required
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <br />
                      </div>

                      <button
                        type="submit"
                        value="login"
                        className="btn btn-danger btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                      >
                        Sign in
                      </button>

                      <div className="text-center d-flex justify-content-between mt-4">
                        <p>
                          OR &nbsp;
                          <Link
                            to="/register"
                            className="font-italic text-muted"
                          >
                            <u>Create Account</u>
                          </Link>
                        </p>
                      </div>
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
