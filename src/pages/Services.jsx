import Header from "../components/Header";
import Footer from "../components/Footer";
import VideoComponet from "../components/VideoComponent";
import ServicesHire from "../components/ServicesHire";
import ServicesHero from "../components/ServicesHero";
import ServicesProcess from "../components/ServicesProcess";
import ServicesText1 from "../components/ServicesText1";
import ServicesText2 from "../components/ServicesText2";

const Services = () => {
  return (
    <>
      <Header />
      <ServicesHero />
      <ServicesText1 />
      <VideoComponet />
      <ServicesProcess />
      <ServicesHire />
      <ServicesText2 />
      <Footer />
    </>
  );
};

export default Services;
