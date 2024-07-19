import React from "react";
import PageHeader from "../../components/Page-header";
import AboutUs4 from "../../components/About-Us4";
import Services3 from "../../components/Services3";
import Testimonials1 from "../../components/Testimonials1";
import MainSkin from "src/layouts/main-skin";
import AboutUs5 from "src/components/About-Us5";

const About = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);

  return (
    <MainSkin>
      <PageHeader
        title="About Us"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "about us", url: "/about" },
        ]}
      />
      <AboutUs5 />
      <Services3 bigTitle grid />
      <Testimonials1 bigTitle />
      {/* <Team2 /> */}
      {/* <Skills2 /> */}
    </MainSkin>
  );
};

export default About;
