import React from "react";
import { Link } from "react-router-dom";

class City extends React.Component {
  render() {
    let link = `${this.props.cityData.id}`;
    const { cityData } = this.props;
    return (
      <>
          <div onClick={this.props.setCurrentCity} key={this.props.cityData.id} id={this.props.cityData.id}>{cityData.name}</div>
      </>
    );
  }
}

export default City;
