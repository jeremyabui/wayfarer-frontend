import React from "react";
import City from "../components/Cities/City/City";
import CityDetailContainer from '../containers/CityDetailContainer';
import axios from "axios";

class CitiesContainer extends React.Component {
  state = {
    citiesData: [],
    selectedCity: '',
    loaded: false,
  };

  setCurrentCity = (event) => {
    this.setState({ 
      selectedCity: event.target.id,
    })
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
      return (
        <>
          <City setCurrentCity={this.setCurrentCity} cityData={city} key={city._id} />
        </>
      );
    });
  };

  render() {
    return (
      <>
        <h1>Citiessssss</h1>
        {this.displayCities(this.state.citiesData)}
        <CityDetailContainer selectedCity={this.state.selectedCity} />
      </>
    );
  }
}
export default CitiesContainer;

