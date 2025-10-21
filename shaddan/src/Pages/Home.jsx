import React, { useState } from "react";
import "./home.css";
import Images from "../assets/Images/Image";
import { Link } from "react-router-dom";
export default function Home() {
    const [isImageLoading, setIsImageLoading] = useState(true);
 
  return (
    <>
         <div className="container-fluid p-0 position-relative">
      {/* Spinner shown until image loads */}
      {isImageLoading && (
        <div className="d-flex justify-content-center align-items-center w-100 h-100 bg-light position-absolute top-0 start-0">
          <div className="spinner-grow text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {/* Banner Image */}
      <img
        src={Images.banner}
        alt="Shaddan Textile Banner"
        className="banner-image img-fluid w-100"
        fetchPriority="high"
        onLoad={() => setIsImageLoading(false)} // hide spinner once image loads
       
      />

      {/* Overlay Text */}
      {!isImageLoading && (
        <div className="overlay-text text-uppercase position-absolute top-50 start-50 translate-middle text-center text-white">
          <h1>Welcome to Shaddan Textiles</h1>
          <p>We Provide Quality Products</p>
        </div>
      )}
    </div>
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
          {/* Towels */}
          <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
            <div className="card border-0 shadow-sm h-100 ">
              <img
                src={Images.towels}
                alt="Towels"
                className="img-fluid rounded mb-3"
                loading="lazy"
              />
              <h4 className="fw-semibold text-success">Towels</h4>
              <p className="text-muted small">
                Luxuriously soft and absorbent terry towels crafted for ultimate
                comfort and durability.
              </p>
            </div>
          </div>

          {/* Garments */}
          <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
            <div className="card border-0 shadow-sm h-100 ">
              <img
                src={Images.garments}
                alt="Garments"
                className="img-fluid rounded mb-3"
                loading="lazy"
              />
              <h4 className="fw-semibold text-success">Garments</h4>
              <p className="text-muted small">
                High-quality knitted garments designed for comfort, flexibility,
                and modern fashion appeal.
              </p>
            </div>
          </div>

          {/* Sheets */}
          <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
            <div className="card border-0 shadow-sm h-100 ">
              <img
                src={Images.sheets}
                alt="Sheets"
                className="img-fluid rounded mb-3"
                loading="lazy"
              />
              <h4 className="fw-semibold text-success">Fitted Sheets</h4>
              <p className="text-muted small">
                Smooth and breathable knitted fitted sheets ensuring a perfect
                fit and restful sleep.
              </p>
            </div>
          </div>

          {/* Bathrobes */}
          <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
            <div className="card border-0 shadow-sm h-100 ">
              <img
                src={Images.Bathrobes}
                alt="Bathrobes"
                className="img-fluid rounded mb-3"
                loading="lazy"
              />
              <h4 className="fw-semibold text-success">Bathrobes</h4>
              <p className="text-muted small">
                Elegant and cozy bathrobes made from premium fabrics to enhance
                your comfort and style.
              </p>
            </div>
          </div>
        </div>
      </div>
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
        {/* Dark overlay only on background */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // dark overlay (instead of filter)
            zIndex: 1,
          }}
        ></div>

        {/* Text content */}
        <div
          className="position-absolute top-50 start-50 translate-middle text-center text-white"
          style={{ width: "80%", zIndex: 2 }}
        >
          <h1 className="fw-bold text-uppercase mb-3">
            Trying to serve you best since 1966
          </h1>
          <p>
            We are a large sized textile unit located in the most modern and
            prime industrial city Karachi (PAKISTAN). We have a complete setup.
            Our machines are well equipped. Our stitching department comprises
            of numerous kinds of machines to produce high quality of home
            textiles of knitted / woven, Knitted Garments, & Terry towels.
          </p>
          <Link to="/about">
            <button type="button" className="btn btn-outline-light ps-5 pe-5">
              About us
            </button>
          </Link>
        </div>
      </div>

      {/* Production Process Section */}
      <div className="container-fluid p-5    py-5">
        <div className="text-center ">
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
            {
              icon: "🧶",
              title: "Knitting",
              desc: "High-quality yarns are carefully knitted into fabrics using advanced circular knitting machines ensuring durability and softness.",
            },
            {
              icon: "💧",
              title: "Dyeing",
              desc: "Our dyeing process ensures vibrant, long-lasting colors with eco-friendly dyes and precise temperature control.",
            },
            {
              icon: "✂️",
              title: "Cutting",
              desc: "Fabrics are cut with automated precision cutters, ensuring accuracy and minimal waste before sewing.",
            },
            {
              icon: "🧵",
              title: "Stitching",
              desc: "Expert tailors and modern machines combine to create garments with impeccable stitching and finishing details.",
            },
            {
              icon: "🪡",
              title: "Finishing",
              desc: "Every product goes through thorough quality checks, ironing, and finishing touches for a flawless result.",
            },
            {
              icon: "📦",
              title: "Packaging & Shipment",
              desc: "Finally, our products are packaged professionally and shipped worldwide with care and efficiency.",
            },
          ].map((step, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="process-card p-4 text-center">
                <div className="process-icon mb-3">{step.icon}</div>
                <h4 className="fw-bold  mb-2">{step.title}</h4>
                <p className="text-muted">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
   <div
        className="stats-section text-center py-5 position-relative"
        style={{
          backgroundImage:
            "url('https://t4.ftcdn.net/jpg/02/48/73/62/360_F_248736289_dPoqf5gSWVEHZFbHshCMGPaWQmMz6IoP.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Light overlay for better readability */}
        <div className="overlay position-absolute top-0 start-0 w-100 h-100 bg-white opacity-75"></div>

        <div className="container position-relative p-5">
          {/* Section Heading */}
          <div className="mb-5">
            <h2 className="fw-bold text-success text-uppercase display-6">
              Our Achievements
            </h2>
            <p className="text-muted fs-5">
              Over the years, <b>Shaddan Textiles</b> has flourished through
              dedication, innovation, and excellence — delivering quality
              products and building long-lasting partnerships worldwide.
            </p>
          </div>

          {/* Stats Row */}
          <div className="row gy-4">
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="p-4 bg-white shadow rounded-4 h-100 hover-shadow">
                <img
                  src={Images.icon1}
                  alt="Yarn Exported"
                  height={65}
                  className="mb-3"
                />
                <h3 className="fw-bold text-success">40+</h3>
                <h5 className="fw-semibold text-dark">Yarn Exported</h5>
                <p className="text-muted small">
                  Supplying premium yarns to international markets with trust and
                  consistency.
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="p-4 bg-white shadow rounded-4 h-100 hover-shadow">
                <img
                  src={Images.icon2}
                  alt="Fabrics Delivered"
                  height={65}
                  className="mb-3"
                />
                <h3 className="fw-bold text-success">10+</h3>
                <h5 className="fw-semibold text-dark">Exported Countries</h5>
                <p className="text-muted small">
                  Delivering top-quality woven and knitted fabrics globally.
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="p-4 bg-white shadow rounded-4 h-100 hover-shadow">
                <img
                  src={Images.icon3}
                  alt="Global Clients"
                  height={65}
                  className="mb-3"
                />
                <h3 className="fw-bold text-success">100+</h3>
                <h5 className="fw-semibold text-dark">Global Clients</h5>
                <p className="text-muted small">
                  Partnering with trusted brands across continents.
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="p-4 bg-white shadow rounded-4 h-100 hover-shadow">
                <img
                  src={Images.icon4}
                  alt="Years of Experience"
                  height={65}
                  className="mb-3"
                />
                <h3 className="fw-bold text-success">50+</h3>
                <h5 className="fw-semibold text-dark">Years of Experience</h5>
                <p className="text-muted small">
                  A proud legacy of textile excellence since 1996.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
