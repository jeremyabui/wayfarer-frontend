import React from "react";
import axios from "axios";

import CityDetail from "../components/CityDetail/CityDetail";
import PostsContainer from './PostsContainer';

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
        {/* {this.state.loaded && <PostsContainer posts={this.props.cityDetails.posts} /> } */}
      </section>
    );
  }
}

export default CityDetailContainer;
