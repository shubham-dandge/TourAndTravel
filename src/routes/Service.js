import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../Assets/4.jfif"

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Service"
        btnClass="hide"
      />
    </>
  );
}
export default Service;
