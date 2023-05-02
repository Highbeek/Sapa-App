import React from "react";
import SapaVideo from "../components/SapaVideo";
import HIWSection from "../components/HIWSteps";
import "./Howitworks.css";

const HowItWorks = () => {
  return (
    <div className="howItWorks">
      <div className="hiw__header">
        <h1>How saPA Works</h1>
        <p>
          SaPA is the best place to fundraise, whether you are an individual,
          group, or organization
        </p>
      </div>
      <div className="works__vid">
        <SapaVideo />
      </div>
      <section>
        <HIWSection />
      </section>
    </div>
  );
};

export default HowItWorks;
