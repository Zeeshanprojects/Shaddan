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
      <div className="container-fluid p-5 bg-color">
        <div className="row text-center my-5">
          <h1 className="fw-bold text-uppercase">
            Shaddan Textiles Industries
          </h1>
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
      <div className="container divisions-section py-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold text-uppercase">Our Divisions</h1>
          <p className="text-muted w-75 mx-auto">
            Shaddan Textile Industries operates through specialized divisions
            focused on innovation, quality, and craftsmanship — ensuring
            excellence from yarn creation to finished garments.
          </p>
        </div>

        <div className="row justify-content-center text-center">
          {/* Yarn Division */}
          <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
            <div className="card p-4 h-100">
              <i className="fas fa-dna fa-3x text-success mb-3"></i>
              <h5 className="fw-bold mb-2">Yarn Division</h5>
              <p className="text-muted">
                High-quality yarn production using premium raw materials and
                advanced spinning technology to ensure strength and consistency.
              </p>
            </div>
          </div>

          {/* Fabrics Division */}
          <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
            <div className="card p-4 h-100">
              <i className="fas fa-layer-group fa-3x text-success mb-3"></i>
              <h5 className="fw-bold mb-2">Fabrics Division</h5>
              <p className="text-muted">
                Specialized in knitted and woven fabrics with superior finishing
                and dyeing, ensuring softness, durability, and color fastness.
              </p>
            </div>
          </div>

          {/* Workwear Division */}
          <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
            <div className="card p-4 h-100">
              <i className="fas fa-user-shield fa-3x text-success mb-3"></i>
              <h5 className="fw-bold mb-2">Workwear Division</h5>
              <p className="text-muted">
                Manufacturing high-performance uniforms and protective clothing
                designed for safety, comfort, and professional appearance.
              </p>
            </div>
          </div>

          {/* Garment Division */}
          <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
            <div className="card p-4 h-100">
              <i className="fas fa-tshirt fa-3x text-success mb-3"></i>
              <h5 className="fw-bold mb-2">Garment Division</h5>
              <p className="text-muted">
                Modern garment production with attention to detail, offering a
                wide range of stylish and comfortable apparel for global
                markets.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Production Process Section */}
      <div className="container-fluid p-5 production-section py-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold  text-uppercase">
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
                <h4 className="fw-bold text-success mb-2">{step.title}</h4>
                <p className="text-muted">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container why-choose-section my-5 py-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold text-uppercase">Why Choose Us</h1>
          <p className="text-muted w-75 mx-auto">
            At Shaddan Textile Industries, we take pride in delivering
            excellence at every stage of textile manufacturing. Our commitment
            to quality, sustainability, and innovation has made us a trusted
            name worldwide.
          </p>
        </div>

        <div className="row text-center">
          {/* Card 1 */}
          <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
            <div className="card  p-4 h-100">
              <i className="fas fa-industry fa-3x text-success mb-3"></i>
              <h5 className="fw-bold mb-2">State-of-the-Art Facilities</h5>
              <p className="text-muted">
                Equipped with modern knitting, dyeing, and finishing units
                ensuring precision and global quality standards.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
            <div className="card p-4 h-100">
              <i className="fas fa-leaf fa-3x text-success mb-3"></i>
              <h5 className="fw-bold mb-2">Eco-Friendly Production</h5>
              <p className="text-muted">
                We follow sustainable practices to minimize waste, conserve
                energy, and promote environmental responsibility.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
            <div className="card p-4 h-100">
              <i className="fas fa-users-cog fa-3x text-success mb-3"></i>
              <h5 className="fw-bold mb-2">Skilled Workforce</h5>
              <p className="text-muted">
                Our experienced professionals combine craftsmanship with
                innovation to deliver perfection in every product.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
            <div className="card p-4 h-100">
              <i className="fas fa-globe fa-3x text-success mb-3"></i>
              <h5 className="fw-bold mb-2">Global Reach</h5>
              <p className="text-muted">
                Serving leading international brands with reliability, timely
                delivery, and uncompromised quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
