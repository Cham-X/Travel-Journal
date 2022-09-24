import React from "react";
import Card from "./Card";

const TravelList = (props) => {
  return (
    <ul className="card-list">
      {props.travels.map((travel) => {
        return (
          <Card
            key={travel.id}
            id={travel.id}
            imageUrl={travel.imageUrl}
            title={travel.title}
            startDate={travel.startDate}
            endDate={travel.endDate}
            description={travel.description}
            googleMapsUrl={travel.googleMapsUrl}
          />
        );
      })}
    </ul>
  );
};

export default TravelList;
