import React from "react";
import { Link } from "react-router-dom";
const clipPath = () => {
  return (
    <React.Fragment>
      <div className="clip-path">
        <div className="clip-content">
          <h1>
            Need a website <br /> or SEO help?
          </h1>
        </div>
        <div className="clip-contact">
          <div className="text">
            <i className="fas fa-envelope" />
            <Link to="" className="btn-link btn">
              Request a Quote
            </Link>
          </div>
        </div>
        <div className="no">
          <p>(719) 577-4404</p>
        </div>
      </div>
      <div className="clip-path-shadow" />
    </React.Fragment>
  );
};

export default clipPath;
