import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Banner from "./Banner";
import Companies from "./Companies";
import FAQ from "./FAQ";
import Testimonial from "./Testimonial";

gsap.registerPlugin(ScrollTrigger);
const MainHome = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <div>
      <Banner />
      <Companies />
      <Testimonial />
      <FAQ />
    </div>
  );
};

export default MainHome;
