import type { NextPage } from "next";
import About from "../components/About";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Portfolio from "../components/Portfolio";
import WhatDo from "../components/WhatDo";
import Loading from "../components/Loading";
import ScrollToTop from "../components/ScrollToTop";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lod = () => setLoading(false);
    const interval = setTimeout(() => {
      lod();
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <Layout>
      <Hero />
      <WhatDo></WhatDo>
      <About></About>
      <Portfolio></Portfolio>
      {/* <Blog></Blog> */}
      <Contact></Contact>
      <ScrollToTop></ScrollToTop>
    </Layout>
  );
};

export default Home;
