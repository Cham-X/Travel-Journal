import React from "react";
import Card from "../Card";
import Navbar from "../Navbar";
import data from "../data";
import AddIcon from "../AddIcon";

const AllTravels = () => {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div className="App">
      <Navbar />
      <section className="card-list">{cards}</section>
      <AddIcon />
    </div>
  );
};

export default AllTravels;
