import React from "react";
import Images from "../assets/Images/Image";

export default function Qualitypolicy() {
  return (
    <>
      <div className="quality-section py-5">
        <div className="container">
          {/* Section 1 - Quality Assurance */}
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="fw-bold text-success mb-3">Quality Assurance</h2>
              <p className="text-muted">
                Shaddan Textile Industries believes in and practices a{" "}
                <b>“Quality at the Source”</b> philosophy to ensure all products
                and services meet or exceed customer expectations at competitive
                prices. Every individual follows established procedures and
                policies to ensure it’s done right — the first time and every
                time.
              </p>
              <p className="text-muted">
                As followers of the <b>Six Sigma</b> approach, our goal is to
                pursue <b>Zero Defect Quality</b>. Our quality assurance team
                continuously monitors processes to ensure adherence to
                international standards, while fostering innovation and
                continuous improvement.
              </p>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src={Images.Quality}
                alt="Quality Assurance"
                className="img-fluid rounded-3 shadow-sm"
              />
            </div>
          </div>

          {/* Section 2 - Dyeing and Finishing */}
          <div className="row align-items-center flex-lg-row-reverse mb-5">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="fw-bold text-success mb-3">
                Dyeing and Finishing
              </h2>
              <p className="text-muted">
                Our Dyeing & Finishing Division operates with advanced{" "}
                <b>Theis dyeing machines</b> with a production capacity of 8
                tons per day. Our finishing line includes equipment from global
                leaders such as Tube Tex (USA), Kranz Stenter (Germany), and
                Heliot Dryer (France).
              </p>
              <p className="text-muted">
                We ensure superior dyeing for 100% cotton, blended, and
                polyester fabrics using{" "}
                <b>Oeko-Tex certified eco-friendly dyes</b>. Each batch meets
                international standards of dimensional stability and color
                fastness.
              </p>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src={Images.Dyeing}
                alt="Dyeing and Finishing"
                className="img-fluid rounded-3 shadow-sm"
              />
            </div>
          </div>

          {/* Section 3 - Fabric Division */}
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="fw-bold text-success mb-3">Fabric Division</h2>
              <p className="text-muted">
                Our Fabric Division specializes in a wide range of knitted
                fabrics including{" "}
                <b>
                  Single Jersey, Interlock, Rib, Terry, Pique, Brush Back,
                  Spandex Terry, Loop Back Terry, and Fleece Pointelle
                </b>
                .
              </p>
              <p className="text-muted">
                We also manufacture{" "}
                <b>Jacquards, Auto Stripers, and Transfer Jacquards</b> using
                premium natural and blended fibers like Viscose, Modal, and
                yarn-dyed materials — ensuring versatility and quality in every
                yard.
              </p>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src={Images.Fabric}
                alt="Fabric Division"
                className="img-fluid rounded-3 shadow-sm"
              />
            </div>
          </div>

          {/* Section 4 - Garment Division */}
          <div className="row align-items-center flex-lg-row-reverse">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="fw-bold text-success mb-3">Garment Division</h2>
              <p className="text-muted">
                Our Garment Division focuses on the production of{" "}
                <b>ready-made knitted and woven apparel</b> such as t-shirts,
                polos, sweatshirts, hoodies, and casual wear. We deliver both
                OEM and private label garments tailored to our clients’
                specifications.
              </p>
              <p className="text-muted">
                Each product is crafted under strict quality control using
                modern stitching, cutting, and finishing machines. We ensure
                that every piece reflects our commitment to{" "}
                <b>comfort, durability, and global export standards</b>.
              </p>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src={Images.Garments}
                alt="Garment Division"
                className="img-fluid rounded-3 shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
