import React from "react";
import "./home.css";
import Images from "../assets/Images/Image";
export default function Home() {
  return (
    <>
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
     <div className="container-fluid p-5 bg-light">
  <div className="row text-center mb-4">
    <h1 className="fw-bold text-uppercase">Shaddan Textiles Industries</h1>
    <h5>
      Our Product lines are Knitted Garments / Knitted Fitted Sheet / Terry
      Towel & Bathrobes / Textile Made-ups
    </h5>
  </div>

  {/* Products Section */}
  <div className="row justify-content-center text-center g-4">
    <div className="col-10 col-sm-6 col-md-4 col-lg-2">
      <div className="p-4 shadow rounded bg-white">
        <img
          src="your-image-path/knitted-garments.jpg"
          alt="Knitted Garments"
          className="img-fluid rounded mb-3"
        />
        <h6 className="fw-bold text-success">Knitted Garments</h6>
      </div>
    </div>

    <div className="col-10 col-sm-6 col-md-4 col-lg-2">
      <div className="p-4 shadow rounded bg-white">
        <img
          src="your-image-path/towels.jpg"
          alt="Towels"
          className="img-fluid rounded mb-3"
        />
        <h6 className="fw-bold text-success">Towels</h6>
      </div>
    </div>

    <div className="col-10 col-sm-6 col-md-4 col-lg-2">
      <div className="p-4 shadow rounded bg-white">
        <img
          src="your-image-path/fitted-sheet.jpg"
          alt="Knitted Fitted Sheet"
          className="img-fluid rounded mb-3"
        />
        <h6 className="fw-bold text-success">Knitted Fitted Sheet</h6>
      </div>
    </div>

    <div className="col-10 col-sm-6 col-md-4 col-lg-2">
      <div className="p-4 shadow rounded bg-white">
        <img
          src="your-image-path/bathrobes.jpg"
          alt="Bathrobes"
          className="img-fluid rounded mb-3"
        />
        <h6 className="fw-bold text-success">Bathrobes</h6>
      </div>
    </div>

    <div className="col-10 col-sm-6 col-md-4 col-lg-2">
      <div className="p-4 shadow rounded bg-white">
        <img
          src="your-image-path/woven-bedlinen.jpg"
          alt="Woven Bedlinen"
          className="img-fluid rounded mb-3"
        />
        <h6 className="fw-bold text-success">Woven Bedlinen</h6>
      </div>
    </div>
  </div>

  {/* Button */}
  <div className="d-flex justify-content-center mt-5">
    <button type="button" className="btn btn-outline-success px-4 py-2">
      READ MORE
    </button>
  </div>
</div>

      <div className="container-fluid position-relative p-0">
        <img
          src={Images.banner2}
          alt="Division Banner"
          className="img-fluid w-100"
          style={{
            height: "75vh", // Adjust height for landscape look
            objectFit: "cover", // Keeps image proportionally scaled
            filter: "brightness(50%)", // Slight dark effect for readable text
          }}
        />

        {/* Text overlay */}
        <div
          className="position-absolute top-50 start-50 translate-middle text-center text-white"
          style={{ width: "80%" }}
        >
          <h1 className="fw-bold text-uppercase mb-3">
            Trying to serve you best since 1966
          </h1>
          <p className="fs-5">
              Venturing into the field of Home Textile, Shaddan Enterprises was established in 1996 as a progressive unit concentrating on the production and export of home textile products such as knitted / woven bedlinen, fitted sheets, towels, bath robes, slippers & Knitted Garments etc. Thriving and delivering in accordance with international standards has led to greater expansion of Shaddan Enterprises to the multi dimensional incarnation it is today. Shaddan Enterprises is now considered as a complete solution provider when it comes to home textiles. Shaddan Enterprises is a prominent manufacturer, exporter, supplier of renowned client of textiles to wholesalers and retailers worldwide. Shaddan Enterprises completely understands the niche of each and every client which has further led our Company to overcome quite a few barriers and deliver total customer satisfaction. Our people are always involved in bringing excellent customer service keeping the core trust in view which was once a consideration. Shaddan's superb quality products are produced with the most excellent raw products available in the market. Not a single phase of production is left unattended at Shaddan guaranteeing purity in business
          </p>
        </div>
      </div>

      {/* Production Process Section */}
      <div className="container-fluid p-5 production-section   py-5">
        <div className="text-center ">
          <h1 className="fw-bold  text-uppercase">Our Production Process</h1>
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
{/* Location Section */}
<div className="container-fluid map-section section-spacing bg-color">
  <div className="text-center mb-4">
    <h1 className="fw-bold text-uppercase">Find Us on Map</h1>
    <p className="text-muted">
      Visit our manufacturing facility and experience quality at its finest.
    </p>
  </div>

  <div className="row justify-content-center">
    <div className="col-12 ">
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.7984364615736!2d67.0208121!3d24.904856099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f1da139e45b%3A0x3f04ae9c5fb6dcc9!2sSHADDAN%20ENTERPRISES!5e0!3m2!1sen!2s!4v1760183346267!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Shaddan Enterprises Location"
        ></iframe>
      </div>
    </div>
  </div>
</div>

    </>
  );
}
