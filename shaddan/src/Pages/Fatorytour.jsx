import React, { useState, useEffect } from "react";
import Images from "../assets/Images/Image"; // your image imports

export default function FactoryTour() {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const FactoryImages = [
    Images.Factoryimage1,
    Images.Factoryimage2,
  Images.Factoryimage3,

    Images.Factoryimage5,
    Images.Factoryimage6,
    Images.Factoryimage7,
  
    Images.Factoryimage10,
    Images.Factoryimage11,
    Images.Factoryimage12,

    Images.Factoryimage14,
    Images.Factoryimage15,

    Images.Factoryimage17,
    Images.Factoryimage18,
    Images.Factoryimage19,
        Images.Factoryimage21,
  ];

  // ✅ Preload all images before showing them
  useEffect(() => {
    let loadedCount = 0;
    FactoryImages.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FactoryImages.length) {
          setImagesLoaded(true);
        }
      };
    });
  }, [FactoryImages]);

  return (
    <div className="factory-tour-section py-5">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-success text-uppercase">Factory Tour</h2>
          <p className="text-muted">
            Explore our state-of-the-art production facilities equipped with modern
            machinery, expert craftsmanship, and sustainable processes.
          </p>
              <hr className="w-25 mx-auto text-success opacity-75" />
        </div>

        {/* Loader */}
        {!imagesLoaded ? (
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "300px" }}>
            <div className="spinner-border text-success" role="status" style={{ width: "4rem", height: "4rem" }}>
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          /* Image Grid */
          <div className="row g-4 fade-in">
            {FactoryImages.map((image, index) => (
              <div className="col-sm-12 col-md-6 col-lg-4" key={index}>
                <div className="factory-image-wrapper shadow-sm rounded-3 overflow-hidden">
                  <img
                    src={image}
                    alt={`Factory ${index + 1}`}
                    className="img-fluid factory-image"
                    loading="lazy" // ✅ lazy loading helps scrolling performance
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
