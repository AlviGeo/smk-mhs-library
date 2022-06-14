import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  
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
                    {error && <Alert variant="danger">{error}</Alert>}
                      <form>
                        <div className="form-group mb-3">
                          <input
                            type="email"
                            autoFocus
                            className="Email form-control rounded-pill border-0 shadow-sm px-4"
                            placeholder="Email address"
                            required
                            ref={emailRef}
                          />
                        </div>

                        <div className="form-group mb-3">
                          <input
                            type="password"
                            className="password form-control rounded-pill border-0 shadow-sm px-4 text-danger"
                            placeholder="Password"
                            required
                            ref={passwordRef}
                          />
                          <br />
                        </div>

                        <button
                          disabled={loading}
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
