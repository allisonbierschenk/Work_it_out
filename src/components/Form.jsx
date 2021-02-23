import { config, queryURL } from "../services";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

function Form(props) {
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [reps, setReps] = useState("");
  const [sets, setSets] = useState("");
  const [weight, setWeight] = useState("");
  const [workout, setWorkout] = useState("");
  const [time, setTime] = useState("");
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    if (props.workouts.length > 0 && params.id) {
      const foundWorkout = props.workouts.find((work) => params.id === work.id);
      if (foundWorkout) {
        setCategory(foundWorkout.fields.category);
        setDate(foundWorkout.fields.date);
        setReps(foundWorkout.fields.reps);
        setSets(foundWorkout.fields.sets);
        setWeight(foundWorkout.fields.weight);
        setWorkout(foundWorkout.fields.workout);
        setTime(foundWorkout.fields.time);
      }
    }
    // console.log("test", props.workouts);
  }, [props.workouts, params.id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      category,
      workout,
      date,
      time,
      reps,
      sets,
      weight,
    };
    if (params.id) {
      const submissionURL = `${queryURL}/${params.id}`;
      await axios.put(submissionURL, { fields }, config);
    } else {
      await axios.post(queryURL, { fields }, config);
    }
    props.setToggleFetch((curr) => !curr);
    history.push("/");
  };

  return (
    <div className="full-page-form" className="full-page-form-overlay">
      <h3>Fill out the form below to log your latest workout.</h3>
      <form onSubmit={handleSubmit} className="full-form">
        {/* https://reactjs.org/docs/forms.html */}
        <select
          className="dropdown"
          id="dropdown"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option disabled hidden value="">
            Select a Category
          </option>
          <option value="legs">Legs</option>
          <option value="abs">Abs</option>
          <option value="arms">Arms</option>
          <option value="back">Back</option>
          <option value="cardio">Cardio</option>
          <option value="recovery">Recovery</option>
        </select>
        <input
          className="form-field"
          id="form-field"
          type="text"
          placeholder="workout:"
          value={workout}
          onChange={(e) => setWorkout(e.target.value)}
        ></input>
        <input
          className="form-field"
          id="form-field"
          type="text"
          placeholder="date:"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        ></input>
        <input
          className="form-field"
          id="form-field"
          type="text"
          placeholder="time:"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        ></input>
        <input
          className="form-field"
          id="form-field"
          type="text"
          placeholder="reps:"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
        ></input>
        <input
          className="form-field"
          id="form-field"
          type="text"
          placeholder="sets:"
          value={sets}
          onChange={(e) => setSets(e.target.value)}
        ></input>
        <input
          className="form-field"
          id="form-field"
          type="text"
          placeholder="weight:"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        ></input>
        <button
          className="form-button"
          id="form-button"
          type="submit"
          onSubmit={handleSubmit}
        >
          Log
        </button>
      </form>
    </div>
  );
}

export default Form;
