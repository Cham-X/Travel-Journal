import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar.js";
// import data from "../data";
import AddIcon from "../Components/AddIcon";
// import Card from "../Card";
import TravelList from "../Components/TravelList";

const AllTravels = () => {
  const [loadedTravel, setLoadedTravel] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setLoadedTravel(true);
    fetch(
      "https://traveljournal-aa656-default-rtdb.firebaseio.com//travels.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedTravel(meetups);
      });
  }, []);
  return (
    <div className="App">
      <Navbar />
      {isLoading &&
       <div className="loading">
        <h2>Loading.....</h2>
      </div>}
     {loadedTravel.length > 0 && <TravelList travels={loadedTravel} />}
      <AddIcon />
    </div>
  );
};

export default AllTravels;
