import React from "react";

const Navbar = ({ setCategory }) => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary   "
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span className="badge rounded-pill bg-danger text-white fs-4">
              Samachar
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <div
                  onClick={() => setCategory("technology")}
                  className="nav-link"
                >
                  Technology
                </div>
              </li>
              <li className="nav-item">
                <div
                  onClick={() => setCategory("business")}
                  className="nav-link"
                >
                  Buisness
                </div>
              </li>
              <li className="nav-item">
                <div onClick={() => setCategory("sports")} className="nav-link">
                  Sports
                </div>
              </li>
              <li className="nav-item">
                <div
                  onClick={() => setCategory("entertainment")}
                  className="nav-link"
                >
                  Entertainment
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => setCategory("health")}>
                  Health
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
