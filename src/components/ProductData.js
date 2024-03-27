import "./ProductStyles.css";
import { Component } from "react";
import locaimg1 from "../Assets/1.png";
import locaimg2 from "../Assets/2.jfif";
import locaimg3 from "../Assets/3.jfif";
import locaimg4 from "../Assets/4.jfif";
import Products from "./Products";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="image">
          <img alt="img" src={this.props.img1} />
          <img alt="img" src={this.props.img2} />
        </div>
      </div>
    );
  }
}

export default DestinationData;
