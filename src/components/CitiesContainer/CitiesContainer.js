import React from "react";
import City from "./City/City";
import CityDetailContainer from "./CityDetailContainer/CityDetailContainer";
import axios from "axios";
import video2 from "./assets/gardenVideo.mp4";
import "./CitiesContainer.css";

class CitiesContainer extends React.Component {
  state = {
    citiesData: [],
    selectedCity: "",
    loaded: false
  };

  setCurrentCity = event => {
    this.setState({
      selectedCity: event.target.id
    });
  };

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/cities`, { withCredentials: true })
      .then(res => {
        this.setState({
          citiesData: res.data.data,
          loaded: true
        });
      })
      .catch(err => console.log(err));
  }

  displayCities = cities => {
    return cities.map(city => {
      return (
        <>
          <City
            setCurrentCity={this.setCurrentCity}
            cityData={city}
            key={city._id}
          />
        </>
      );
    });
  };

  render() {
    return (
      <section>
        <div className="cities-explore">
          <video
            className="profile-img-background"
            autoPlay={true}
            loop={true}
            src={video2}
          ></video>
          <h1>EXPLORE</h1>
        </div>
        <div className="cities-container">
          <div className="city-list">
            {this.displayCities(this.state.citiesData)}
          </div>
          <CityDetailContainer selectedCity={this.state.selectedCity} />
        </div>
      </section>
    );
  }
}
export default CitiesContainer;
