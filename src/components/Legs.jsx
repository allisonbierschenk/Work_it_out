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
      <h2>Workouts</h2>
      <div>
        {workouts.map((legObject, index) => (
          <div key={index}>
            <p>{legObject.fields.workout}</p> <p>{legObject.fields.date}</p>
            <p>{legObject.fields.time}</p> <p>{legObject.fields.reps}</p>
            <p>{legObject.fields.sets}</p> <p>{legObject.fields.weight}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Legs;
