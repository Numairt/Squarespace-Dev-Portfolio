import react from "react";
import HomeHero from "../components/HomeHero";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ProjectsSection from "../components/ProjectsSection";
import BlogSection from "../components/BlogSection";
import GallerySection from "../components/GallerySection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <HomeHero />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <BlogSection />
      <GallerySection />
      <Footer />
    </>
  );
};
export default Home;
