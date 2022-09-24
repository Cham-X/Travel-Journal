import React, { useEffect, useState } from "react";
// import Card from "../Card";
import Navbar from "../Navbar";
// import data from "../data";
import AddIcon from "../AddIcon";
// import Card from "../Card";
import TravelList from "../TravelList";

const AllTravels = () => {
  const [loadedTravel, setLoadedTravel] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-project-649ac-default-rtdb.firebaseio.com/travels.json"
    )
      .then((response) => {
        response.json();
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
        setLoadedTravel(travels)
      });
  }, []);
  if (isLoading) {
    return (
      <section>
        <h2>Loading.....</h2>
      </section>
    );
  }
  // const cards = data.map((item) => {
  //   return <Card key={item.id} {...item} />; 
  // });
  return (
    <div className="App">
      <Navbar />
      {/* <section className="card-list"> 
      <Card travels={loadedTravel}/> 
      </section> */}
     {loadedTravel.length > 0 && <TravelList travels={loadedTravel} />}
      <AddIcon />
    </div>
  );
};

export default AllTravels;
