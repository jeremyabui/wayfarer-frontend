import React from "react";

import City from "../components/Cities/City/City";
// import api from "../components/Cities/cities.json";

class CitiesContainer extends React.Component {
  state = {
    loaded: false,
    cities: []
  };

  displayCities = cities => {
    return cities.map(city => {
      return <City key={city._id} cityData={city} />;
    });
  };

  render() {
    return <div>{this.displayCities(this.props.cities)}</div>;
  }
}

export default CitiesContainer;
