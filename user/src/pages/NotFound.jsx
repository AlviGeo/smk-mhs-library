import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div className="body-inner">
        <section id="main-container" className="main-container">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="error-page text-center">
                  <div className="error-code">
                    <h2>
                      <strong>404</strong>
                    </h2>
                  </div>
                  <div className="error-message">
                    <h3>Oops... Page Not Found!</h3>
                  </div>
                  <div className="error-body">
                    Try using the button below to go to main page of the site{" "}
                    <br />
                    <Link to="/" className="btn btn-primary">
                      Back to Home Page
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NotFound;
