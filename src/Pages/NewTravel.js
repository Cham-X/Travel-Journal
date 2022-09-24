import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import NewTravelForm from "../NewTravelForm";

const NewTravel = () => {
  const navigate = useNavigate()
   
  function addTravel(newTravelData) {
    fetch(
      "https://react-project-649ac-default-rtdb.firebaseio.com/travels.json",
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
