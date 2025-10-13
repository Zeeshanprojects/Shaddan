import React from "react";
import "./header.css";
import Images from "../assets/Images/Image";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <div className="top-bar bg py-3 ">
        <div className="container-fluid ">
          <h5 className="text-white text-center mb-0">
            Welcome to Shaddan Textile Industries
          </h5>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light  ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Images.logo} alt="logo" height={200} width={200} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                >
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/qualitypolicy"
                >
                  QUALITY POLICY
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/factorytour"
                >
                  FACTORY TOUR
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/csr">
                  CSR
                </Link>
              </li>
            </ul>
            <form className="d-flex  ">
              <Link to="/contact">
                <button className="btn btn-success ps-5 pe-5" type="submit">
                  Contact
                </button>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
