import locaimg1 from "../Assets/5.jfif";
import locaimg2 from "../Assets/6.jfif";
import locaimg3 from "../Assets/7.jfif";
import ProductData from "./ProductData";
import "./ProductStyles.css";


const Destination = () => {
  return (
    <div className="destination">
      <h1>Our Brands at Dassault Systèmes</h1>
      <p>
        Our brands support 12 industries across the manufacturing, life sciences
        & healthcare, and cities & infrastructure sectors. Our world-class brand
        portfolios help you to boost productivity & product quality, improve
        business resilience, and facilitate sustainable innovation.
      </p>
      <ProductData
      className="first-des-reverse"
      heading = "CATIA"
      text="Our brands support 12 industries across the manufacturing, life sciences & healthcare, and cities & infrastructure sectors. Our world-class brand portfolios help you to boost productivity & product quality, improve business resilience, and facilitate sustainable innovation."
      img1 = {locaimg1}  
      img2 = {locaimg2}
      />
      <ProductData
      className="first-des-reverse"
      heading = "SOLIDWORKS"
      text="Our brands support 12 industries across the manufacturing, life sciences & healthcare, and cities & infrastructure sectors. Our world-class brand portfolios help you to boost productivity & product quality, improve business resilience, and facilitate sustainable innovation."
      img1 = {locaimg1}  
      img2 = {locaimg2}
      />     
    </div>
  );
};
export default Destination;
