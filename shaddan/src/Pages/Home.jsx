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
          <h1>Welcome to Shaddan Textile</h1>
          <p>We Provide Quality Products</p>
        </div>
      </div>
      <div className="container-fluid p-5 bg-color">
        <div className="row text-center my-5">
          <h1 className="fw-bold text-success">Shaddan Textile Industries</h1>
          <h5>
            Our Product lines are Knitted Garments /Knitted Fitted Sheet /Terry
            Towel & Bathrobes / Textile Made-up
          </h5>
          <p className="">
            We, at Shaddan Textiles (Pvt) Limited, firmly believe that each of
            our product should give value for your money. The design and
            manufacturing is done to fulfill your present and future needs. We
            take care of our client in a better way to satisfy them and produce
            quality product. Our personalized services and constant
            communication ensure complete peace of mind to our customer. We help
            customers in improving their competitive edge by using our technical
            expertise, cost effectiveness and practical approach. Shaddan
            Textile Industries (Pvt.) Ltd. places highest emphasis on
            manufacturing of its products with consistent quality and producing
            right the first time, on time and every time, to ensure customer
            satisfaction in all respects.
          </p>
        </div>
      </div>
   <div className="container-fluid p-5 about-section">
  <div className="row align-items-center">
    {/* Left Side: Content */}
    <div className="col-sm-12 col-md-12 col-lg-6 p-5 text-start">
      <h1 className="fw-bold mb-3 text-uppercase text-success">
        About Shaddan Textile
      </h1>
      <p className="text-muted">
        Shaddan Textile Industries has been a symbol of quality and innovation in the textile world. 
        With decades of expertise, we specialize in manufacturing premium knitted garments, 
        fitted sheets, terry towels, bathrobes, and other textile made-ups designed to meet 
        international standards.
      </p>
      <p className="text-muted">
        Our commitment to excellence, state-of-the-art production facilities, and skilled 
        craftsmanship allow us to deliver comfort and style to global customers. 
        We believe in sustainability, integrity, and delivering beyond expectations.
      </p>
      <button className="btn btn-outline-success px-4 py-2 mt-3">
        Learn More
      </button>
    </div>

    {/* Right Side: Image */}
    <div className="col-sm-12 col-md-12 col-lg-6 p-0">
      <img src={Images.banner2} alt="Textile Production" className="img-fluid about-image" />
    </div>
  </div>
</div>

     
    </>
  );
}
