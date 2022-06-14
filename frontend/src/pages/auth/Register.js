import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";

const Register = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { register } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match!");
    }

    try {
      setError("");
      setLoading(true);
      await register(emailRef.current.value, passwordRef.current.value);
    } catch (err){
      setError("Failed to create an account", err.message);
    }
    setLoading(false);
  }

  return (
    <div>
      <div>
        <div className="container-fluid">
          <div className="row no-gutter">
            <div className="col-md-6 d-none d-md-flex bg-image" />
            <div className="col-md-6 bg-light">
              <div className="login d-flex align-items-center py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-7 col-xl-6 mx-auto">
                      <h3 className="display-4">REGISTER</h3> <br />

                      {error && <Alert variant="danger">{error}</Alert>}
                      <form onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                          <input
                            id="email"
                            type="email"
                            placeholder="Email"
                            required
                            autofocus
                            className="form-control rounded-pill border-0 shadow-sm px-4"
                            ref={emailRef}
                          />
                        </div>

                        <div className="form-group mb-3">
                          <input
                            id="password"
                            type="password"
                            placeholder="Password"
                            required
                            className="form-control rounded-pill border-0 shadow-sm px-4 text-danger"
                            ref={passwordRef}
                          />
                        </div>

                        <div className="form-group mb-3">
                          <input
                            id="password-confirm"
                            type="password"
                            placeholder="Password Confirm"
                            required
                            className="form-control rounded-pill border-0 shadow-sm px-4 text-danger"
                            ref={passwordConfirmRef}
                          />
                          <br />
                        </div>

                        <div className="custom-control custom-checkbox mb-3">
                          <input
                            id="customCheck1"
                            type="checkbox"
                            defaultChecked
                            className="custom-control-input"
                          />
                          <label
                            htmlFor="customCheck1"
                            className="custom-control-label"
                          >
                            Remember password
                          </label>
                        </div>

                        <button
                          disabled={loading}
                          type="submit"
                          className="btn btn-danger btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                        >
                          Sign in
                        </button>
                        <div className="text-center d-flex justify-content-between mt-4">
                          <p>
                            Already have account? &nbsp;
                            <Link
                              to="/login"
                              className="font-italic text-muted"
                            >
                              <u>Login here</u>
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
    </div>
  );
};

export default Register;
