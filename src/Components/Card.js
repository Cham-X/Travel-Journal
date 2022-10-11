import React from "react";
import Location from "../Images/Fill 220.png";

const Card = (props) => {

  return (
    <li className="card">
      <section className="image-section">
        <img src={props.imageUrl} className="location-image" alt="location" />
      </section>
      <section className="content-section">
        <div>
          <p className="location-details">
            <span>
              <img src={Location} alt="pics" />{" "}
            </span>
            <span className="location">{props.location}</span>
            <a href={props.googleMapsUrl} className="map">
              View Google Map
            </a>
          </p>
          <h2>{props.travelTopic}</h2>
        </div>
        <div>
          <p className="date">
            {props.startDate} - {props.endDate}
          </p>
          <p className="about">{props.description}</p>
        </div>
        <button onClick={props.onRemoveTravel}>Remove Travel</button>
      </section>
    </li>
  );
};
// Photos from Unsplash
// (can use these URLs as your img src)

// Japan
// https://source.unsplash.com/WLxQvbMyfas

// Australia
// https://source.unsplash.com/JmuyB_LibRo

// Norway
// https://source.unsplash.com/3PeSjpLVtLg

export default Card;
