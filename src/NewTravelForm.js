import React from "react";
import Classes from "./NewTravelForm.modules.css";
import { useState } from "react";

const NewTravelForm = (props) => {
  const [formData, setFormData] = useState({
    travelTopic: "",
    country: "",
    imageUrl: "",
    googleUrl: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    props.onAddTravel(formData)

  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add New Travel</h1>
      <input
        type="text"
        placeholder="Travel Location"
        className={Classes.input}
        name="travelTopic"
        value={formData.travelTopic}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        placeholder="Location Country"
        className="form--input"
        name="country"
        onChange={handleChange}
        value={formData.country}
        required
      />
      <input
        type="url"
        placeholder="Location Image Url"
        className="form--input"
        name="imageUrl"
        onChange={handleChange}
        value={formData.imageUrl}
        required
      />
      <input
        type="url"
        placeholder="Location Google-Map Url"
        className="form--input"
        name="googleUrl"
        onChange={handleChange}
        value={formData.googleUrl}
        required
      />
      <div className={Classes.date}>
        <label htmlFor="startDate">Start Date</label>
        <input
          type="date"
          id="startDate"
          placeholder="Start Date"
          className="form--input"
          name="startDate"
          onChange={handleChange}
          value={formData.startDate}
          required
        />
      </div>
      <div className={Classes.date}>
        <label htmlFor="endDate">End Date</label>
        <input
          type="date"
          id="endDate"
          placeholder="End Date"
          className="form--input"
          name="endDate"
          onChange={handleChange}
          value={formData.endDate}
          required
        />
      </div>
      <textarea
        placeholder="Location Description"
        rows="6"
        name="description"
        onChange={handleChange}
        value={formData.description}
        required
      />
      <button>Add Travel</button>
    </form>
  );
};

export default NewTravelForm;
