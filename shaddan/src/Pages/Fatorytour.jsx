import React from "react";
import Images from "../assets/Images/Image"; // Assuming your images are imported here

export default function FactoryTour() {
  // Example images array — replace with your actual image imports
  const FactoryimageImages = [
    Images.Factoryimage1,
    Images.Factoryimage2,
    Images.Factoryimage3,
    Images.Factoryimage4,
    Images.Factoryimage5,
    Images.Factoryimage6,
    Images.Factoryimage7,
    Images.Factoryimage8,
    Images.Factoryimage9,
    Images.Factoryimage10,
    Images.Factoryimage11,
    Images.Factoryimage12,
    Images.Factoryimage13,
    Images.Factoryimage14,
    Images.Factoryimage15,
    Images.Factoryimage16,
    Images.Factoryimage17,
    Images.Factoryimage18,
       Images.Factoryimage19,
       
  ];

  return (
    <div className="Factoryimage-tour-section py-5">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-success text-uppercase">Factoryimage Tour</h2>
          <p className="text-muted">
            Explore our state-of-the-art production facilities equipped with modern
            machinery, expert craftsmanship, and sustainable processes.
          </p>
        </div>

        {/* Image Grid */}
        <div className="row g-4">
          {FactoryimageImages.map((image, index) => (
            <div className="col-6 col-md-4" key={index}>
              <div className="Factoryimage-image-wrapper shadow-sm rounded-3 overflow-hidden">
                <img
                  src={image}
                  alt={`Factoryimage ${index + 1}`}
                  className="img-fluid Factoryimage-image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
