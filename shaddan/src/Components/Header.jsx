import React from "react";
import "./header.css";
import Images from "../assets/Images/Image";
import { Link } from "react-router-dom";

export default function Header() {
  // Function to close navbar after link click (for mobile)
  const handleNavLinkClick = () => {
    const navbarCollapse = document.getElementById("navbarSupportedContent");
    if (navbarCollapse.classList.contains("show")) {
      const collapse = new window.bootstrap.Collapse(navbarCollapse, {
        toggle: true,
      });
      collapse.hide();
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar bg py-3">
        <div className="container-fluid">
          <h6 className="text-white text-center  text-uppercase mb-0">
            Shaddan Textile Industries
          </h6>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          {/* Logo */}
        
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={Images.logo} alt="logo" height={50} width={150} />
          </Link>

          {/* Toggler */}
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* Collapsible Menu */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/"
                  onClick={handleNavLinkClick}
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/about"
                  onClick={handleNavLinkClick}
                >
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/qualitypolicy"
                  onClick={handleNavLinkClick}
                >
                  QUALITY POLICY
                </Link>
              </li>
               <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/csr"
                  onClick={handleNavLinkClick}
                >
                  CSR
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/factorytour"
                  onClick={handleNavLinkClick}
                >
                  FACTORY TOUR
                </Link>
              </li>
             
            </ul>

            {/* Contact Button */}
            <div className="d-flex justify-content-center">
              <Link to="/contact" onClick={handleNavLinkClick}>
                <button className="btn btn-success ps-5 pe-5" type="submit">
                  Contact
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
