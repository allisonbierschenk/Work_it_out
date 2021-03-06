import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Delete from "../components/Delete";

function Arms(props) {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    if (props.workouts) {
      const armCategory = props.workouts.filter((arms) => {
        return arms.fields.category.includes("arms");
      });
      setWorkouts(armCategory);
    }
  }, [props.workouts]);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="full-page-arms" className="full-page-arms-overlay">
      <h2>Logged Arm Workouts</h2>
      <div className="logged-workout-display">
        {workouts.map((armObject, index) => (
          <div key={index} className="logged-workout">
            <Link to={`/edit/${armObject.id}`} className="excersize-title-link">
              <div className="exercise-title">
                <span className="logged-workouts-inline-styling">
                  Workout:{" "}
                </span>
                {armObject.fields.workout}
              </div>
            </Link>
            <p>Date: {armObject.fields.date}</p>
            <div>
              {`${armObject.fields.time}` ? (
                <p>Time: {armObject.fields.time}</p>
              ) : null}
            </div>
            <p> Reps completed: {armObject.fields.reps}</p>
            <p>Sets completed: {armObject.fields.sets}</p>
            <p>Weight used: {armObject.fields.weight}</p>
            <Delete
              legObjectID={armObject}
              setToggleFetch={props.setToggleFetch}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Arms;
