import React from "react";
import SapaVideo from "../components/SapaVideo";
import HIWSection from "../components/HIWSteps";

const HowItWorks = () => {
  return (
    <div className="howItWorks">
      <div className="works__header">
        <h1>How saPA Works</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
          nobis rem vitae natus dolorum quaerat repudiandae aliquid illo ad
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
