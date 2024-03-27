import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../Assets/2.jfif"
function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg= {AboutImg}
        title="Dassault Systemes"
        btnClass="hide"
      />
    </>
  );
}
export default About;
