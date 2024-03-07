// import Destination from "../components/Destination";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
// import Trip from "../components/Trip";
// import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg= "data:image/jpeg;base64,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"
        title="Dassault Systemes"
        text="The 3DEXPERIENCE Company"
        buttonText="Explore"
        url="/"
        btnClass="show"
      />
      {/* <Destination />
      <Trip />
      <Footer /> */}
    </>
  );
}

export default Home;