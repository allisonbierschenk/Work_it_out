import { baseURL, config } from "../services";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Abs(props) {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    if (props.workouts) {
      const abCategory = props.workouts.filter((abs) => {
        return abs.fields.category.includes("abs");
      });
      setWorkouts(abCategory);
    }
  }, [props.workouts]);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <h2>Logged Leg Workouts</h2>
      <div className="logged-workout-display">
        {workouts.map((abObject, index) => (
          <div key={index} className="logged-workout">
            <Link to={`/edit/${abObject.id}`} className="excersize-title-link">
              <div className="exercise-title">
                <span className="logged-workouts-inline-styling">
                  Workout:{" "}
                </span>
                {abObject.fields.workout}
              </div>
            </Link>
            <p>Date: {abObject.fields.date}</p>
            <div>
              {`${abObject.fields.time}` ? (
                <p>Time: {abObject.fields.time}</p>
              ) : null}
            </div>
            <p> Reps completed: {abObject.fields.reps}</p>
            <p>Sets completed: {abObject.fields.sets}</p>
            <p>Weight used: {abObject.fields.weight}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Abs;
