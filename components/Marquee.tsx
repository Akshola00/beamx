import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MarqueeContent from "marquee-content";

const Marquee = () => {
  gsap.registerPlugin(ScrollTrigger);
  MarqueeContent.registerGSAP(gsap, ScrollTrigger);

  const marquee = new MarqueeContent({
    element: ".marquee",
  });

  marquee.init();

  return (
    <div>

    </div>
  );
};

export default Marquee;
