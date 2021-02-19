import { baseURL, config } from "../services";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Cardio(props) {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    if (props.workouts) {
      const cardioCategory = props.workouts.filter((cardio) => {
        return cardio.fields.category.includes("cardio");
      });
      setWorkouts(cardioCategory);
    }
  }, [props.workouts]);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="full-page-cardio" className="full-page-cardio-overlay">
      <h2>Logged Cardio Workouts</h2>
      <div className="logged-workout-display">
        {workouts.map((cardioObject, index) => (
          <div key={index} className="logged-workout">
            <Link
              to={`/edit/${cardioObject.id}`}
              className="excersize-title-link"
            >
              <div className="exercise-title">
                <span className="logged-workouts-inline-styling">
                  Workout:{" "}
                </span>
                {cardioObject.fields.workout}
              </div>
            </Link>
            <p>Date: {cardioObject.fields.date}</p>
            <div>
              {`${cardioObject.fields.time}` ? (
                <p>Time: {cardioObject.fields.time}</p>
              ) : null}
            </div>
            <p> Reps completed: {cardioObject.fields.reps}</p>
            <p>Sets completed: {cardioObject.fields.sets}</p>
            <p>Weight used: {cardioObject.fields.weight}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cardio;
