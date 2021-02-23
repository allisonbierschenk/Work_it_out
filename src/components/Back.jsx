import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Delete from "../components/Delete";

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

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="full-page-back" className="full-page-back-overlay">
      <h2>Logged Back Workouts</h2>
      <div className="logged-workout-display">
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
            <Delete
              legObjectID={backObject}
              setToggleFetch={props.setToggleFetch}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Back;
