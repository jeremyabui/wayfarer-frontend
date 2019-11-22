import React from "react";

const CityDetail = props => {
  console.log(props.name);
  return (
    <>
      <h1 className="city-detail-name">{props.cityDetail.name}</h1>
      <p className="city-detail-description">{props.cityDetail.description}</p>
    </>
  );
};

export default CityDetail;
