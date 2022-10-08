import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
// import data from "../data";
import AddIcon from "../AddIcon";
// import Card from "../Card";
import TravelList from "../TravelList";

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
  // const cards = data.map((item) => {
  //   return <Card key={item.id} {...item} />; 
  // });
  return (
    <div className="App">
      <Navbar />
      {/* <section className="card-list"> 
      <Card travels={loadedTravel}/> 
      </section> */}
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
