import React from "react";
import Classes from "./NewTravelForm.modules.css";

const NewTravelForm = () => {
  return (
    <form>
      <h1>Add New Travel</h1>
      <input type="text" placeholder="Location" className={Classes.input} />
      <input
        type="text"
        placeholder="Location Country"
        className="form--input"
      />
      <input
        type="url"
        placeholder="Location Image Url"
        className="form--input"
      />
      <input
        type="url"
        placeholder="Location Google-Map Url"
        className="form--input"
      />
      {/* <div className={Classes.dates}> */}
      <div className={Classes.date}>
        <label htmlFor="startDate">Start Date</label>
        <input
          type="date"
          id="startDate"
          placeholder="Start Date"
          className="form--input"
        />
      </div>
      <div className={Classes.date}>
        <label htmlFor="endDate">End Date</label>
        <input
          type="date"
          id="endDate"
          placeholder="End Date"
          className="form--input"
        />
      </div>
      {/* </div> */}
      <textarea placeholder="Location Description" rows="6" />
      <button>Add Travel</button>
    </form>
  );
};

export default NewTravelForm;
