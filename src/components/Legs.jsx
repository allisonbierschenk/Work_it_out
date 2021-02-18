import { baseURL, config } from "../services";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <h2>Logged Leg Workouts</h2>
      <div className="logged-workout-display">
        {workouts.map((legObject, index) => (
          <div key={index} className="logged-workout">
            <Link to={`/edit/${legObject.id}`} className="excersize-title-link">
              <div className="exercise-title">
                <span className="logged-workouts-inline-styling">
                  Workout:{" "}
                </span>
                {legObject.fields.workout}
              </div>
            </Link>
            <p>Date: {legObject.fields.date}</p>
            <div>
              {`${legObject.fields.time}` ? (
                <p>Time: {legObject.fields.time}</p>
              ) : null}
            </div>
            <p> Reps completed: {legObject.fields.reps}</p>
            <p>Sets completed: {legObject.fields.sets}</p>
            <p>Weight used: {legObject.fields.weight}</p>
            {/* <Link to={`/edit/${legObject.id}`}>
              <button>Edit</button>
            </Link> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Legs;
