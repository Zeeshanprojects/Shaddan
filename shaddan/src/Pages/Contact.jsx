import React from "react";
import './contact.css'
import Images from "../assets/Images/Image";
export default function Contact() {
  return (
    <>
      <div className="container-fluid py-5 bg-light">
        <div className="row text-center mb-5">
          <h2 className="fw-bold text-success text-uppercase">Contact Us</h2>
          <p className="text-muted">
            Feel free to contact us for more information about us as well as our
            products. We’ll be happy to assist you!
          </p>
        </div>

        <div className="container">
          <div className="row gy-5">
            {/* Left Side - Contact Info */}
            <div className="col-12 col-md-6">
              <h4 className="fw-bold mb-3 text-success">
                Shaddan Enterprises
              </h4>
              <p>
                <strong>Address:</strong> D-14, S.I.T.E. Karachi - Pakistan
              </p>
              <p>
                <strong>Phone:</strong> 0092-21-2565252
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:muhammadashraf@shaddanent.com" className="text-decoration-none text-dark">
                  daud@shaddanapprael.com
                </a>
                {" "}
               
              </p>
              <p>
                <strong>Website:</strong>{" "}
                <a
                  href="https://www.shaddanent.com"
                  className="text-decoration-none text-dark"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.shaddanent.com
                </a>
              </p>
             <div className="cao-section mt-4">
  <div className="d-flex align-items-center">
    <img
      src={Images.CAO}
      alt="cao"
      className="cao-img me-3"
    />
    <div>
      <h5 className="fw-bold text-success mb-1">C.A.O</h5>
      <p className="mb-0 text-dark">Daud Jumani</p>
    </div>
  </div>
</div>

            </div>

            {/* Right Side - Google Map */}
            <div className="col-12 col-md-6">
              <div className="ratio ratio-4x3 shadow-sm rounded-3 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.7984364615736!2d67.0208121!3d24.904856099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f1da139e45b%3A0x3f04ae9c5fb6dcc9!2sSHADDAN%20ENTERPRISES!5e0!3m2!1sen!2s!4v1760341216370!5m2!1sen!2s"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shaddan Enterprises Location"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Optional Contact Message Section */}
          <div className="row mt-5">
            <div className="col-12 text-center">
              <h4 className="fw-bold text-success">We’d love to hear from you!</h4>
              <p className="text-muted">
                Contact us for product specs, pricing, delivery or samples for your evaluation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
