import React from "react";

export default function About() {
  return (
    <div className="about-section py-5">
      <div className="container">
        {/* Header Section */}
        <div className="mb-3 text-center">
          <h2 className="fw-bold text-uppercase text-success mb-3">
            About Shaddan Textiles
          </h2>
          <p className="text-muted">
            Excellence in Home Textile Manufacturing Since 1996. Trusted for
            quality, innovation and timely global delivery.
          </p>
          <hr className="w-25 mx-auto text-success opacity-75" />
        </div>

        {/* About Description */}
        <div className="row align-items-center mt-5 text-justify">
          <div className="col-lg-12">
            <p className="about-text ">
              Venturing into the field of Home Textile,{" "}
              Shaddan Textiles was established in 1996 as a progressive
              and quality-driven manufacturing unit focusing on the production
              and export of premium home textile products such as knitted and
              woven bed linens, fitted sheets, towels, bathrobes, slippers, and
              knitted garments.
            </p>

            <p className="about-text">
              Over the years, we have built a strong reputation for delivering
              exceptional textile products that combine{" "}
              comfort, durability, and elegance. Our company’s continuous
              growth and success stem from our dedication to innovation,
              craftsmanship, and a customer-centric approach that ensures
              satisfaction at every stage.
            </p>

            <p className="about-text">
              Thriving and delivering in accordance with international standards
              has enabled Shaddan Textiles to evolve into a multi-dimensional
              organization. Today, we stand as a{" "}
              complete textile solution provider managing every aspect
              from fabric creation and dyeing to finishing and packaging.
            </p>

            <p className="about-text">
              We cater to a wide clientele across the globe, including
              importers, wholesalers, and retail brands who trust our commitment
              to timely delivery, ethical production, and uncompromised quality.
              Our products are manufactured using modern machinery, skilled
              craftsmanship, and eco-friendly production processes that align
              with sustainable textile practices.
            </p>

            <p className="about-text">
              Our highly skilled workforce and technical experts ensure that
              every product meets strict quality control standards. From yarn
              selection to final inspection, each step reflects our passion for
              excellence and our promise to deliver only the best.
            </p>

            <h3 className="fw-bold text-success mb-3">Our Mission</h3>
            <p className="text-muted">
              Our mission is to create value for our customers by providing
              innovative, high-quality textile solutions that enhance everyday
              living. We strive to combine{" "}
              modern technology with traditional expertise to produce
              textiles that meet the diverse needs of global markets. We are
              committed to continuous improvement, long-term partnerships, and
              ensuring that our products reflect{" "}
              trust, quality, and reliability.
            </p>

            <p className="text-muted">
              By emphasizing sustainable sourcing, ethical labor practices, and
              eco-friendly production, we aim to contribute positively to the
              environment while maintaining our role as a responsible and
              forward-thinking textile manufacturer.
            </p>

            <h3 className="fw-bold text-success mb-3">Our Vision</h3>
            <p className="text-muted">
              To be a global leader in the textile industry, recognized
              for our innovation, integrity, and customer satisfaction. Our
              vision is to redefine textile excellence through continuous
              innovation, responsible production, and enduring partnerships.
            </p>

            <p className="text-muted">
              We envision a future where Shaddan Textiles is not only known for
              its products but also for its{" "}
            
                commitment to sustainability, craftsmanship, and community
                development
            
              . By staying true to our values and embracing technological
              advancements, we continue to move forward — weaving tradition with
              innovation to create textiles that inspire trust and comfort
              worldwide.
            </p>

            <h3 className="fw-bold text-success mb-3">Certifications</h3>
            <p className="text-muted mb-3">
              We ensure that all our products meet international quality and
              sustainability standards.
            </p>
            <ul className="text-muted">
              <li>
                All products are manufactured according to{" "}
                <strong>Oeko-Tex Standard 100</strong>, ensuring they are free
                from harmful dyes and chemicals.
              </li>
              <li>
                We are <strong>GOTS certified</strong> for our organic textile
                manufacturing.
              </li>
              <li>
                Enrolled with the{" "}
                <strong>Better Cotton Initiative (BCI)</strong> for responsible
                cotton sourcing.
              </li>
              <li>
                <strong>BSCI certified</strong>, meeting all major international
                quality and social compliance standards.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
