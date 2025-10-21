import React from "react";

export default function CSR() {
  return (
    <div className="csr-section py-5">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-success text-uppercase">
            Corporate Social Responsibility (CSR)
          </h2>
          <p className="text-muted">
            At Shaddan Textile Industries, we believe that success is not only
            measured by business growth but also by the positive impact we
            create for our employees, society, and the environment.
          </p>
                      <hr className="w-25 mx-auto text-success opacity-75" />
        </div>

        {/* Commitment Section */}
        <div className="mb-5">
          <h4 className="fw-bold text-success mb-3">Our Commitment</h4>
          <p>
            At Shaddan, our main focus begins with ensuring that citizenship and
            ethical responsibility are practiced at every level of our business.
            We are dedicated to conducting commerce in a transparent, fair, and
            responsible way. The heart of our commitment lies in the welfare and
            development of our employees, communities, and the environment in
            which we operate.
          </p>
          <p>
            Shaddan ensures that all employees are nurtured, trained, and kept
            under a safe and supportive environment. Our goal is to create a
            workplace that inspires trust, creativity, and personal growth for
            every team member.
          </p>
        </div>

        {/* Employee Welfare */}
        <div className="mb-5">
          <h4 className="fw-bold text-success mb-3">Employee Welfare & Safety</h4>
          <p>
            Our people are our greatest strength. We take pride in ensuring that
            all employees work in a safe, hygienic, and inclusive environment.
            Shaddan follows international safety and labor standards, offering
            training sessions, protective gear, and workplace insurance to every
            employee.
          </p>
          <p>
            We continuously monitor and improve workplace conditions through
            internal audits and regular safety checks. Every individual working
            at Shaddan is covered by indemnity and operates under international
            safety measures to ensure complete protection and well-being.
          </p>
        </div>

        {/* Environmental Sustainability */}
        <div className="mb-5">
          <h4 className="fw-bold text-success mb-3">Environmental Sustainability</h4>
          <p>
            As a textile manufacturer, we understand our responsibility towards
            the environment. Our production processes are designed to minimize
            waste, save energy, and reduce water usage. We strictly use
            eco-friendly, Oeko-Tex compliant dyes and chemicals that meet
            international safety standards.
          </p>
          <p>
            We are continually improving our manufacturing systems to be more
            sustainable by adopting cleaner technologies and greener production
            methods. Protecting the planet for future generations is an
            essential part of our mission.
          </p>
        </div>

        {/* Community Development */}
        <div className="mb-5">
          <h4 className="fw-bold text-success mb-3">Community Development</h4>
          <p>
            We are committed to giving back to the communities around us.
            Through educational support, vocational training programs, and local
            employment opportunities, Shaddan contributes to improving the
            quality of life for many families.
          </p>
          <p>
            Our initiatives focus on building long-term relationships that
            deliver real benefits to society. We believe that when communities
            thrive, businesses grow stronger as well.
          </p>
        </div>

        
      </div>
    </div>
  );
}
