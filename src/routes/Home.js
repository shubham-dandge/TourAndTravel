import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Destination from "../components/Products";
import Trip from "../components/Trip";
import yz from "../Assets/group.jpeg"
import Footer from "../components/Footer";


function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={yz}
        title="Dassault Systemes"
        text="The 3DEXPERIENCE Company"
        buttonText="Explore"
        url="/"
        btnClass="show"
      />
      <Destination/>
      <Trip/>
      <Footer/>
    </>
  );
}

export default Home;
