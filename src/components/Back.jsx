import { baseURL, config } from "../services";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Back(props) {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    if (props.workouts) {
      const backCategory = props.workouts.filter((back) => {
        return back.fields.category.includes("back");
      });
      setWorkouts(backCategory);
    }
  }, [props.workouts]);

  return (
    <div>
      <h2>Logged Leg Workouts</h2>
      <div className="logged-workout-dispay">
        {workouts.map((backObject, index) => (
          <div key={index} className="logged-workout">
            <Link
              to={`/edit/${backObject.id}`}
              className="excersize-title-link"
            >
              <div className="exercise-title">
                <span className="logged-workouts-inline-styling">
                  Workout:{" "}
                </span>
                {backObject.fields.workout}
              </div>
            </Link>
            <p>Date: {backObject.fields.date}</p>
            <div>
              {`${backObject.fields.time}` ? (
                <p>Time: {backObject.fields.time}</p>
              ) : null}
            </div>
            <p> Reps completed: {backObject.fields.reps}</p>
            <p>Sets completed: {backObject.fields.sets}</p>
            <p>Weight used: {backObject.fields.weight}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Back;
