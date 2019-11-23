import React from "react";

const CityDetail = props => {
  return (
    <>
      <h1 className="city-detail-name">{props.cityDetails.name}</h1>
      <p className="city-detail-description">{props.cityDetails.description}</p>
      <img src={props.cityDetails.photo} alt={props.cityDetails.name}/>
    </>
  );
};

export default CityDetail;
