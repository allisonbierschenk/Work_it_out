import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Delete from "../components/Delete";

function Recovery(props) {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    if (props.workouts) {
      const recoveryCategory = props.workouts.filter((recovery) => {
        return recovery.fields.category.includes("recovery");
      });
      setWorkouts(recoveryCategory);
    }
  }, [props.workouts]);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="full-page-recovery" className="full-page-recovery-overlay">
      <h2>Logged Recovery Workouts</h2>
      <div className="logged-workout-display">
        {workouts.map((recoveryObject, index) => (
          <div key={index} className="logged-workout">
            <Link
              to={`/edit/${recoveryObject.id}`}
              className="excersize-title-link"
            >
              <div className="exercise-title">
                <span className="logged-workouts-inline-styling">
                  Workout:{" "}
                </span>
                {recoveryObject.fields.workout}
              </div>
            </Link>
            <p>Date: {recoveryObject.fields.date}</p>
            <div>
              {`${recoveryObject.fields.time}` ? (
                <p>Time: {recoveryObject.fields.time}</p>
              ) : null}
            </div>
            <p> Reps completed: {recoveryObject.fields.reps}</p>
            <p>Sets completed: {recoveryObject.fields.sets}</p>
            <p>Weight used: {recoveryObject.fields.weight}</p>
            <Delete
              legObjectID={recoveryObject}
              setToggleFetch={props.setToggleFetch}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recovery;
