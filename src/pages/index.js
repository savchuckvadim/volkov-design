import { useEffect } from "react";

import MainSkin from "src/layouts/main-skin";
import Intro5 from "src/components/Intro5";
import AboutUs5 from "src/components/About-Us5";
import Portfolio3 from "src/components/Portfolio3";
import Process2 from "src/components/Process2";
import Services6 from "src/components/Services6";
import Blogs5 from "src/components/Blogs5";


export default function Home({ id }) {
  useEffect(() => {
    document.querySelector("body").classList.add("index2");
  }, []);

  return (
    <MainSkin>
      <Intro5 />
      <AboutUs5 />
      <Portfolio3 />
      <Process2 />
      <Services6 />
      {/* <VideoWithTestimonials /> */}
      {/* <SkillsCircle2 /> */}
      <Blogs5 />
    </MainSkin>
  );
}
