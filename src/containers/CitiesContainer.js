import React from "react";

import City from "../components/Cities/City/City";
import axios from "axios";

class CitiesContainer extends React.Component {
  state = {
    citiesData: [],
    selectedCity: '',
    loaded: false,
  };

  setCurrentCity = (event) => {
    this.setState({ 
      selectedCity: event.target.citiesData,
      loaded: false,
    })
    console.log(event.target.citiesData);
  };

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API_URL}/cities`, { withCredentials: true })
      .then((res) => {
        this.setState({
          citiesData: res.data.data,
          loaded: true,
        })
      })
      .catch((err) => console.log(err));
  };

  displayCities = cities => {
    return cities.map(city => {
      // console.log(city._id);
      return (
        <>
          <City setCurrentCity={this.setCurrentCity} cityData={city} id={city._id} key={city._id}/>
        </>
      );
    });
  };

  render() {
    return (
      <section>
        <h1>Citiessssss</h1>
        <div>{this.displayCities(this.state.citiesData)}</div>
      </section>
    );
  }
}

export default CitiesContainer;
