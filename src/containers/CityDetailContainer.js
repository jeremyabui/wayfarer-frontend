import React from "react";
import axios from "axios";

import CityDetail from "../components/CityDetail/CityDetail";

class CityDetailContainer extends React.Component {
  state = {
    cityDetail: "",
    loaded: false
  };

  componentDidMount() {
    const cityId = document.location.href.split("/")[4];
    axios
      .get(`${process.env.REACT_APP_API_URL}/cities/${cityId}`)
      .then(res => {
        console.log(res);
        this.setState({
          cityDetail: res.data.data,
          loaded: true
        });
        console.log(this.state.cityDetail);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="city-detail-container">
        <h2>City Detail</h2>
        {this.state.loaded && <CityDetail cityDetail={this.state.cityDetail} />}
      </div>
    );
  }
}

export default CityDetailContainer;
