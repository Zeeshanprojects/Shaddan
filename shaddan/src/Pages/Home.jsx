import React from "react";
import "./home.css";
import Images from "../assets/Images/Image";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div className="container-fluid p-0 position-relative ">
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
    <div className="container-fluid py-5 bg-light text-center">
  <div className="row mb-5">
    <h1 className="fw-bold text-uppercase text-success mb-2">
      Shaddan Textiles Industries
    </h1>
    <p className="text-muted">
      Our Product Lines Include Knitted Garments, Fitted Sheets, Terry Towels, Bathrobes & Textile Made-ups.
    </p>
  </div>

  <div className="row justify-content-center">
    {/* Towels */}
    <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
      <div className="card border-0 shadow-sm h-100 ">
        <img src={Images.towels} alt="Towels" className="img-fluid rounded mb-3" />
        <h4 className="fw-semibold text-success">Towels</h4>
        <p className="text-muted small">
          Luxuriously soft and absorbent terry towels crafted for ultimate comfort and durability.
        </p>
      </div>
    </div>

    {/* Garments */}
    <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
      <div className="card border-0 shadow-sm h-100 ">
        <img src={Images.garments} alt="Garments" className="img-fluid rounded mb-3" />
        <h4 className="fw-semibold text-success">Garments</h4>
        <p className="text-muted small">
          High-quality knitted garments designed for comfort, flexibility, and modern fashion appeal.
        </p>
      </div>
    </div>

    {/* Sheets */}
    <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
      <div className="card border-0 shadow-sm h-100 ">
        <img src={Images.sheets} alt="Sheets" className="img-fluid rounded mb-3" />
        <h4 className="fw-semibold text-success">Fitted Sheets</h4>
        <p className="text-muted small">
          Smooth and breathable knitted fitted sheets ensuring a perfect fit and restful sleep.
        </p>
      </div>
    </div>

    {/* Bathrobes */}
    <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
      <div className="card border-0 shadow-sm h-100 ">
        <img src={Images.Bathrobes} alt="Bathrobes" className="img-fluid rounded mb-3" />
        <h4 className="fw-semibold text-success">Bathrobes</h4>
        <p className="text-muted small">
          Elegant and cozy bathrobes made from premium fabrics to enhance your comfort and style.
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
      We are a large sized textile unit located in the most modern and prime
      industrial city Karachi (PAKISTAN). We have a complete setup. Our machines
      are well equipped. Our stitching department comprises of numerous kinds of
      machines to produce high quality of home textiles of knitted / woven,
      Knitted Garments, & Terry towels.
    </p>
    <Link to="/about">
     <button type="button" className="btn btn-outline-light ps-5 pe-5">About us</button></Link>
   
  </div>
</div>


      {/* Production Process Section */}
      <div className="container-fluid p-5    py-5">
        <div className="text-center ">
          <h1 className="fw-bold text-success text-uppercase">Our Production Process</h1>
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
<div className="stats-section py-2 bg-light text-center">
  <div className="container p-5">
    {/* Section Heading */}
    <div className="mb-5">
      <h2 className="fw-bold text-success text-uppercase">Our Achievements</h2>
      <p className="text-muted">
        Over the years, Shaddan Textiles has grown with dedication, innovation, and excellence — 
        delivering quality products across the globe.
      </p>
    </div>

    {/* Stats Row */}
    <div className="row gy-4">
      <div className="col-sm-6 col-md-6 col-lg-3">
        <div className="p-4 bg-white shadow-sm rounded-4 h-100 hover-effect">
          <img src={Images.icon1} alt="Yarn Exported" height={60} className="mb-3"/>
          <h3 className="fw-bold text-success">40+</h3>
          <h5 className="fw-semibold">Yarn Exported</h5>
          <p className="text-muted small">Supplying premium yarns to global markets with consistency and quality.</p>
        </div>
      </div>

      <div className="col-sm-6 col-md-6 col-lg-3">
        <div className="p-4 bg-white shadow-sm rounded-4 h-100 hover-effect">
          <img src={Images.icon2} alt="Fabrics Delivered" height={60} className="mb-3"/>
          <h3 className="fw-bold text-success">10+</h3>
          <h5 className="fw-semibold">Exported Countries</h5>
          <p className="text-muted small">Delivering woven and knitted fabrics meeting international standards.</p>
        </div>
      </div>

      <div className="col-sm-6 col-md-6 col-lg-3">
        <div className="p-4 bg-white shadow-sm rounded-4 h-100 hover-effect">
          <img src={Images.icon3} alt="Global Clients" height={60} className="mb-3"/>
          <h3 className="fw-bold text-success">100+</h3>
          <h5 className="fw-semibold">Global Clients</h5>
          <p className="text-muted small">Proudly serving trusted clients across multiple continents.</p>
        </div>
      </div>

      <div className="col-sm-6 col-md-6 col-lg-3">
        <div className="p-4 bg-white shadow-sm rounded-4 h-100 hover-effect">
          <img src={Images.icon4} alt="Years of Experience" height={60} className="mb-3"/>
          <h3 className="fw-bold text-success">50+</h3>
          <h5 className="fw-semibold">Years of Experience</h5>
          <p className="text-muted small">A legacy of excellence in textile manufacturing since 1996.</p>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
}
