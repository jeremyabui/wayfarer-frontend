import React from "react";
import axios from "axios";
import api from "../components/Cities/cities.json";

import CityDetail from "../components/CityDetail/CityDetail";

class CityDetailContainer extends React.Component {
  state = {
    cityDetail: "",
    loaded: false,
    city: api
  };

  displayCity = city => {
    return city.map(cityDetail => {
      return (
        <div>
          <CityDetail cityData={cityDetail} />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="city-detail-container">
        <h2>City Detail</h2>
        <div>{this.displayCity(this.state.city)}</div>
      </div>
    );
  }
}

export default CityDetailContainer;
