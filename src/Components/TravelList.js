import React from "react";
import Card from "./Card";

const TravelList = (props) => {
  return (
    <ul className="card-list">
      {props.travels.map((travel) => {
        return (
          <Card
            key={travel.id}
            {...travel}
          />
        );
      })}
    </ul>
  );
};

export default TravelList;
