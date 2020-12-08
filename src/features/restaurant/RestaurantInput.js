import React, { useState } from "react";
import { addRestaurant } from "./restaurantsSlice";

function RestaurantInput() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleLocationChange(event) {
    setLocation(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // add missing code
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <input
          type="text"
          onChange={handleNameChange}
          id="name"
          placeholder="restaurant name"
        />
      </p>
      <p>
        <input
          type="text"
          onChange={handleLocationChange}
          id="location"
          placeholder="location"
        />
      </p>
      <input type="submit" />
    </form>
  );
}

export default RestaurantInput;
