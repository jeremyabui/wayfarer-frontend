import React from "react";
import axios from "axios";

import CityDetail from "../components/CityDetail/CityDetail";

class CityDetailContainer extends React.Component {
  state = {
    cityDetails: "",
    loaded: false,
  };

  componentDidUpdate() {
    axios.get(`${process.env.REACT_APP_API_URL}/cities/${this.props.selectedCity}`, {
      withCredentials: true 
    })
      .then((res) => {
        this.setState({
          cityDetails: res.data.data
        })
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="city-detail-container">
        <CityDetail cityDetails={this.state.cityDetails} />
      </div>
    );
  }
}

export default CityDetailContainer;
