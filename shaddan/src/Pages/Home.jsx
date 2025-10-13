import React from "react";
import "./home.css";
import Images from "../assets/Images/Image";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* Banner Section */}
      <div className="container-fluid p-0 position-relative">
        <img
          src={Images.banner}
          alt="Shaddan Textile Banner"
          className="banner-image img-fluid"
        />
        <div className="overlay-text text-uppercase">
          <h1>Welcome to Shaddan Textiles</h1>
          <p>We Provide Quality Products</p>
        </div>
      </div>

      {/* Products Section */}
      <div className="container-fluid py-5 bg-light text-center">
        <div className="row mb-5">
          <h1 className="fw-bold text-uppercase text-success mb-2">
            Shaddan Textiles Industries
          </h1>
          <p className="text-muted">
            Our Product Lines Include Knitted Garments, Fitted Sheets, Terry
            Towels, Bathrobes & Textile Made-ups.
          </p>
        </div>

        <div className="row justify-content-center">
          {[
            {
              title: "Towels",
              desc: "Luxuriously soft and absorbent terry towels crafted for ultimate comfort and durability.",
            },
            {
              title: "Garments",
              desc: "High-quality knitted garments designed for comfort, flexibility, and modern fashion appeal.",
            },
            {
              title: "Fitted Sheets",
              desc: "Smooth and breathable knitted fitted sheets ensuring a perfect fit and restful sleep.",
            },
            {
              title: "Bathrobes",
              desc: "Elegant and cozy bathrobes made from premium fabrics to enhance your comfort and style.",
            },
          ].map((item, i) => (
            <div key={i} className="col-sm-12 col-md-6 col-lg-3 mb-4">
              <div className="card border-0 shadow-sm h-100">
                <h4 className="fw-semibold text-success">{item.title}</h4>
                <p className="text-muted small">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Parallax Section */}
      <div
        className="container-fluid position-relative p-0"
        style={{
          height: "75vh",
          backgroundImage: `url(${Images.banner2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        ></div>

        <div
          className="position-absolute top-50 start-50 translate-middle text-center text-white"
          style={{ width: "80%", zIndex: 2 }}
        >
          <h1 className="fw-bold text-uppercase mb-3">
            Trying to serve you best since 1966
          </h1>
          <p>
            We are a large sized textile unit located in Karachi, Pakistan,
            equipped with state-of-the-art machines and modern stitching units
            to produce high-quality home textiles, garments, and towels.
          </p>
          <Link to="/about">
            <button type="button" className="btn btn-outline-light ps-5 pe-5">
              About Us
            </button>
          </Link>
        </div>
      </div>

      {/* Production Process Section */}
      <div className="container-fluid p-5 py-5">
        <div className="text-center">
          <h1 className="fw-bold text-success text-uppercase">
            Our Production Process
          </h1>
          <p>
            From yarn to finished goods — precision, quality, and craftsmanship
            in every step.
          </p>
        </div>

        <div className="row justify-content-center">
          {[
            { icon: "🧶", title: "Knitting", desc: "High-quality yarns are carefully knitted..." },
            { icon: "💧", title: "Dyeing", desc: "Eco-friendly dyes with precise temperature..." },
            { icon: "✂️", title: "Cutting", desc: "Fabrics are cut with automated precision..." },
            { icon: "🧵", title: "Stitching", desc: "Expert tailors ensure flawless finishing..." },
            { icon: "🪡", title: "Finishing", desc: "Every product goes through strict QC..." },
            { icon: "📦", title: "Packaging & Shipment", desc: "Products are packaged professionally..." },
          ].map((step, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="process-card p-4 text-center">
                <div className="process-icon mb-3">{step.icon}</div>
                <h4 className="fw-bold mb-2">{step.title}</h4>
                <p className="text-muted">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
