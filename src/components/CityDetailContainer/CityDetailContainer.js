import React from "react";
import axios from "axios";

import CityDetail from "./CityDetail/CityDetail";
import PostsContainer from '../PostsContainer/PostsContainer';

class CityDetailContainer extends React.Component {
  state = {
    cityDetails: "",
    loaded: false,
    posts: [],
  };

  componentDidUpdate() {
    axios.get(`${process.env.REACT_APP_API_URL}/cities/${this.props.selectedCity}`, {
      withCredentials: true 
    })
      .then((res) => {
        this.setState({
          cityDetails: res.data.data,
          loaded: true,
        })
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <section className="city-detail-container">
        <CityDetail cityDetails={this.state.cityDetails} />
        {/* <PostsContainer /> */}
      </section>
    );
  }
}

export default CityDetailContainer;
