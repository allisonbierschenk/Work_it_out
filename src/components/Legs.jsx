import { baseURL, config } from "../services";
import { useState, useEffect } from "react";
import axios from "axios";

function Legs(props) {
  const workout = props.workouts.map((workout) => workout.fields);
  console.log("workout const", workout);
  const workoutCategory = workout.map(
    (workoutCategory) => workoutCategory.category
  );
  console.log(workoutCategory[1]);

  return (
    <div>
      <h2>Workouts</h2>
      <h3>{workoutCategory[0] === "legs" ? <p>{workout}</p> : null}</h3>
    </div>
  );
}

export default Legs;
