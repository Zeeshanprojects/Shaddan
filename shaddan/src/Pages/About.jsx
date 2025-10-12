import React from 'react'

export default function About() {
  return (
     <div className="about-section py-5">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h1 className="fw-bold text-uppercase text-success mb-3">
            About Shaddan Textiles
          </h1>
          <p className="text-muted">
            Excellence in Home Textile Manufacturing Since 1996
          </p>
        </div>

        {/* About Description */}
        <div className="row align-items-center">
          <div className="col-lg-12">
            <p className="about-text">
              Venturing into the field of Home Textile, <b>Shaddan Textiles</b> was
              established in 1996 as a progressive unit concentrating on the
              production and export of home textile products such as knitted /
              woven bedlinen, fitted sheets, towels, bathrobes, slippers, and
              knitted garments. 
            </p>

            <p className="about-text">
              Thriving and delivering in accordance with international standards has
              led to the expansion of Shaddan Textiles into a multi-dimensional
              organization. Today, we are recognized as a complete solution provider
              for all kinds of home textiles — from fabric creation to finished
              products.
            </p>

            <p className="about-text">
              Shaddan Textiles proudly serves as a trusted manufacturer,
              exporter, and supplier to renowned clients, wholesalers, and retailers
              worldwide. Our deep understanding of market demands enables us to
              deliver tailored textile solutions while maintaining total customer
              satisfaction and trust.
            </p>

            <p className="about-text">
              Our dedicated team ensures that every stage of production meets the
              highest standards of quality, using the finest raw materials and modern
              machinery to produce superior knitted, woven, and terry products.
            </p>
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="row mt-5 text-center">
          <div className="col-md-6 mb-4">
            <div className="mission-card p-4 shadow rounded-3 h-100 p-5">
              <h3 className="fw-bold text-success mb-3">Our Mission</h3>
              <p className="text-muted">
                To create value and make a difference by focusing on the needs of
                our customers and partners. We constantly explore global markets,
                innovate in product development, and deliver quality textiles with
                a vision of becoming your most reliable textile partner.
              </p>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="vision-card p-4 shadow rounded-3 h-100 p-5">
              <h3 className="fw-bold text-success mb-3">Our Vision</h3>
              <p className="text-muted">
                To be the leading textile manufacturer, partnering with our clients
                for a more prosperous and sustainable future. Our vision drives us
                to excel with integrity, innovation, and customer satisfaction at
                the heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

