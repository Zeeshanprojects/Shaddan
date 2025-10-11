import React from "react";
import "./header.css";
import Images from "../assets/Images/Image";
export default function Header() {
  return (
    <>
      <div className="top-bar bg py-3">
        <div className="container d-flex justify-content-between align-items-center">
         
          <h6 className="text-white mb-0">
            Welcome to Shaddan Textile Industries
          </h6>
          <h6 className="text-white mb-0">info@shaddantextile.com</h6>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Images.logo} alt="logo" height={200} width={200}/>
          
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
                <a className="nav-link active" aria-current="page" href="#">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  ABOUT
                </a>
              </li>

              <li className="nav-item dropdown ">
                <a
                  className="nav-link dropdown-toggle active"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  QUALITY POLICY
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown ">
                <a
                  className="nav-link dropdown-toggle active"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
              FACTORY TOUR
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  PROJECTS
                </a>
              </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                 ERP INITIATIVE
                </a>
              </li>
            </ul>
            <form className="d-flex  ">
              <button className="btn btn-outline-success ps-5 pe-5 pt-3 pb-3" type="submit">
                Contact
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
