import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar.js";
// import data from "../data";
import AddIcon from "../Components/AddIcon";
// import Card from "../Card";
import TravelList from "../Components/TravelList";
import Loading from "../Components/Loading.js";

const AllTravels = () => {
  const [loadedTravel, setLoadedTravel] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://traveljournal-aa656-default-rtdb.firebaseio.com//travels.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const travels = [];

        for (const key in data) {
          const travel = {
            id: key,
            ...data[key],
          };
          travels.push(travel);
        }

        setIsLoading(false);
        setLoadedTravel(travels);
      });
  }, []);
  const onRemoveTravel = function(id){
     setLoadedTravel(travels.filter(travel => travel.id !== id))
  }
  return (
    <div className="App">
      <Navbar />
      {isLoading &&
        <Loading/>
      }
     {loadedTravel.length > 0 && <TravelList travels={loadedTravel} onRemoveTravel={onRemoveTravel}/>}
      <AddIcon />
    </div>
  );
};

export default AllTravels;
