import React from "react";
import "./home.css";
import Images from "../assets/Images/Image";
export default function Home() {
  return (
    <>
    <div className="container-fluid p-0 position-relative">
  <img src={Images.banner} alt="Shaddan Textile Banner" className="banner-image img-fluid" />
  <div className="overlay-text text-uppercase">
    <h1>Welcome to Shaddan Textile</h1>
    <p>We Provide Quality Products</p>
  </div>
</div>

    </>
  );
}
