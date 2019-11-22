import React from "react";

class City extends React.Component {
  state = {
    name: this.props.cityData.name
  };

  render() {
    const { cityData } = this.props;
    return (
      <div className="city-div">
        <h1>{cityData.name}</h1>
        <p>{cityData.description}</p>
        <img height="300px" width="500px" src={cityData.photo} />
      </div>
    );
  }
}

export default City;
