import React from "react";
import { Link } from "react-router-dom";

class City extends React.Component {
  render() {
    let link = `${this.props.cityData._id}`;
    const { cityData } = this.props;
    return (
      <div className="city-div">
        <Link to={link}>
          <h1>{cityData.name}</h1>
          <p>{cityData.description}</p>
          <img alt="city" height="300px" width="500px" src={cityData.photo} />
        </Link>
      </div>
    );
  }
}

export default City;
