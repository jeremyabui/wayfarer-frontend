import React, { Component } from "react";
import City from "./City/City";
import api from "./cities.json";

class Cities extends Component {
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
// const Cities = () => {
//   return (
//     <section className="home">
//       <h1>Cities</h1>
//     </section>
//   );
// };

export default Cities;
