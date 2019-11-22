import React from "react";
import City from "../components/Cities/City/City";
import api from "../components/Cities/cities.json";
class CitiesContainer extends React.Component {
  state = {
    cities: api
  };

  displayCities = cities => {
    return cities.map(city => {
      return (
        <div className="city-container">
          <City cityData={city} />
        </div>
      );
    });
  };

  render() {
    return (
      <section>
        <h1>Citiessssss</h1>
        <div>{this.displayCities(this.state.cities)}</div>
      </section>
    );
  }
}
export default CitiesContainer;
