import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutHero from "../components/AboutHero";
import VideoComponent from "../components/VideoComponent";
import AboutFacts from "../components/About-Facts";
import AboutBackStory from "../components/AboutBackStory";
import AboutScroll from "../components/AboutScroll";
import AboutInsta from "../components/AboutInsta";

const About = () => {
  return (
    <>
      <Header />
      <AboutHero />
      <AboutFacts />
      <VideoComponent />
      <AboutBackStory />
      <AboutScroll />
      <AboutInsta />
      <Footer />
    </>
  );
};

export default About;
