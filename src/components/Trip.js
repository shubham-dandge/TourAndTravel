import TripData from "./TripData";
import "./TripStyles.css";
import Trip1 from "../Assets/5.jfif"
import Trip2 from "../Assets/6.jfif"
import Trip3 from "../Assets/7.jfif"

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations</p>

      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="CATIA"
          text="
          CATIA shifts traditional 3D CAD (computer‑aided design) expectations to cognitive augmented design, which fuses modeling and simulation. Leveraging knowledge, know‑how and proven technology to automate design and systems engineering, CATIA is helping to shape a connected world by offering all the features for design of connected objects and experiences powered by cyber‑systems."
        />

        <TripData
          image={Trip2}
          heading="DELMIA"
          text="Powered by the 3DEXPERIENCE platform, DELMIA delivers solutions to address the most challenging situations manufacturers experience today. We connect the virtual and real worlds to empower our customers worldwide to collaborate, model, optimize, and execute supply chains, manufacturing, logistics, and service to achieve strategic business results "
        />

        <TripData
          image={Trip3}
          heading="SIMULIA"
          text="SIMULIA simulation software accelerates the process of evaluating the performance, reliability and safety of materials and products before committing to physical prototypes. Explore the engineering disciplines that we support. "
        />
      </div>
    </div>
  );
}

export default Trip;
