// import { baseURL, config } from "../services";
import { useState, useEffect } from "react";
// import axios from "axios";

function Legs(props) {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    if (props.workouts) {
      const legCategory = props.workouts.filter((legs) => {
        return legs.fields.category.includes("legs");
      });
      setWorkouts(legCategory);
    }
  }, [props.workouts]);

  return (
    <div>
      <h2>Logged Leg Workouts</h2>
      <div className="logged-workout-dispay">
        {workouts.map((legObject, index) => (
          <div key={index} className="logged-workout">
            <p className="exercise-title">
              Workout: {legObject.fields.workout}
            </p>
            <p>Date: {legObject.fields.date}</p>
            <p>Time: {legObject.fields.time}</p>
            <p> Reps completed: {legObject.fields.reps}</p>
            <p>Sets completed: {legObject.fields.sets}</p>
            <p>Weight used: {legObject.fields.weight}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Legs;
