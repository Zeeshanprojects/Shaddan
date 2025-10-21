import React, { useState } from "react";
import "./contact.css";
import Images from "../assets/Images/Image";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope,FaUserTie  } from "react-icons/fa";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <div className="container-fluid py-5 bg-light">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-success text-uppercase">Contact Us</h2>
          <p className="text-muted">
            Feel free to contact us for more information about our company and products.
          </p>
        </div>

        {/* Contact Info in Four Columns */}
        <div className="container mb-5">
          <div className="row g-4 text-center">
            {/* Address */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="contact-box shadow-sm rounded-4 p-4 bg-white h-100">
                <div className="plus-icon mb-3">
                  <FaMapMarkerAlt className="text-success fs-3" />
                </div>
                <h6 className="fw-bold text-dark">Address</h6>
                <p className="text-muted small mb-0">D-14, S.I.T.E. Karachi - Pakistan</p>
              </div>
            </div>

            {/* Phone */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="contact-box shadow-sm rounded-4 p-4 bg-white h-100">
                <div className="plus-icon mb-3">
                  <FaPhoneAlt className="text-success fs-3" />
                </div>
                <h6 className="fw-bold text-dark">Phone</h6>
                <p className="text-muted small mb-0">+1 (949) 283-9554</p>
              </div>
            </div>

            {/* Email */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="contact-box shadow-sm rounded-4 p-4 bg-white h-100">
                <div className="plus-icon mb-3">
                  <FaEnvelope className="text-success fs-3" />
                </div>
                <h6 className="fw-bold text-dark">Email</h6>
                <a
                  href="mailto:daud@shaddanapparel.com"
                  className="text-decoration-none text-muted small"
                >
                  daud@shaddanapparel.com
                </a>
              </div>
            </div>

            {/* CAO */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="contact-box shadow-sm rounded-4 p-4 bg-white h-100">
             
               <div className="plus-icon mb-3">
  <FaUserTie className="text-success" style={{ fontSize: "2.2rem" }} />
</div>

                <div>
                  <h6 className="fw-bold text-dark">C.A.O</h6>
                  <p className="mb-0 text-dark">Daud Jumani</p>
                </div>
              </div>
            </div>
          </div>

         </div>

        {/* Google Map (Full Width Below) */}
        <div className="container-fluid">
          <div className="map-wrapper mx-auto shadow-sm rounded-4 overflow-hidden position-relative" style={{ maxWidth: "1200px" }}>
            {isLoading && (
              <div className="d-flex justify-content-center align-items-center w-100 h-100 bg-light position-absolute top-0 start-0">
                <div className="spinner-border text-success" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.7984364615736!2d67.0208121!3d24.904856099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f1da139e45b%3A0x3f04ae9c5fb6dcc9!2sSHADDAN%20ENTERPRISES!5e0!3m2!1sen!2s!4v1760341216370!5m2!1sen!2s"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shaddan Enterprises Location"
              onLoad={() => setIsLoading(false)}
              style={{ border: 0, width: "100%", height: "400px" }}
            ></iframe>
          </div>
        </div>

        {/* Footer Message */}
        <div className="text-center mt-5">
          <h4 className="fw-bold text-success">We’d love to hear from you!</h4>
          <p className="text-muted">
            Contact us for product specs, pricing, delivery, or samples for your evaluation.
          </p>
        </div>
      </div>
    </>
  );
}
