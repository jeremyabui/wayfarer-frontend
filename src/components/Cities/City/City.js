import React from "react";
import { Link } from "react-router-dom";
class City extends React.Component {
  render() {
    let link = `${this.props.cityData._id}`;
    const { cityData } = this.props;
    return (
      <>
<<<<<<< HEAD
          <div onClick={this.props.setCurrentCity} key={this.props.cityData.id} id={this.props.cityData.id}>{cityData.name}</div>
=======
        <h3 className='test' id={`${this.props.cityData._id}`} onClick={this.props.setCurrentCity} key={this.props.cityData.id} >{cityData.name}</h3>
>>>>>>> 0b1975eb9a9e5eec92beb215f74da2786607095e
      </>
    );
  }
}
export default City;