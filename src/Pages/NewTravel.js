import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import NewTravelForm from "../Components/NewTravelForm"; 



const NewTravel = () => {
  const navigate = useNavigate()
   
  function addTravel(newTravelData) {
    fetch(
      "https://traveljournal-aa656-default-rtdb.firebaseio.com//travels.json",
      {
        method: "POST",
        body: JSON.stringify(newTravelData),
        headers: {
          "Content-Type": "application/json",
        },
      }
      ).then(() => {
        navigate("/", {replace: true});
      });
    }
  
  return (
    <div className="App">
      <Navbar/>
      <NewTravelForm onAddTravel={addTravel}/>
    </div>
  );
};

export default NewTravel;
