import About from "../components/About";
import Blog from "../components/Blog";
import Certificate from "../components/Certificate";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Portfolio from "../components/Portfolio";
import Ball from "../components/Ball";
import SkillSectionBuilding from "../components/SkillSectionBuilding";
import SkillSection from "../components/SkillSection";
import WhatDo3d from "../components/WhatDo3d";
import Loading from "../components/Loading";
import BlurryLoading from "../components/BlurryLoading";
import ScrollToTop from "../components/ScrollToTop";
import CircularImageTransition from "../utils/CircularImageTransition";
import { useEffect, useState } from "react";

const Home = () => {
  return (
    <Layout>
      {/* <BlurryLoading></BlurryLoading> */}
      <Hero />
      <WhatDo3d></WhatDo3d>
      <About></About>
      <Portfolio></Portfolio>
      <SkillSectionBuilding></SkillSectionBuilding>
      {/*<SkillSection></SkillSection>
      <Blog></Blog> */}
      <Certificate></Certificate>
      <Contact></Contact>
      <ScrollToTop></ScrollToTop>
    </Layout>
  );
};

export default Home;
