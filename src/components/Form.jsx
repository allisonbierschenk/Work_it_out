import { baseURL, config } from "../services";
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
      const submissionURL = `${baseURL}/${params.id}`;
      await axios.put(submissionURL, { fields }, config);
    } else {
      await axios.post(baseURL, { fields }, config);
    }
    props.setToggleFetch((curr) => !curr);
    history.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* https://reactjs.org/docs/forms.html */}
      <select
        className="form"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>Select a Category</option>
        <option value="legs">Legs</option>
        <option value="abs">Abs</option>
        <option value="arms">Arms</option>
        <option value="back">Back</option>
        <option value="cardio">Cardio</option>
        <option value="recovery">Recovery</option>
      </select>
      {/* <input
        className="form"
        type="text"
        placeholder="category: legs, abs, back, arms, cardio, recovery"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      ></input> */}
      <input
        className="form"
        type="text"
        placeholder="workout"
        value={workout}
        onChange={(e) => setWorkout(e.target.value)}
      ></input>
      <input
        className="form"
        type="text"
        placeholder="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      ></input>
      <input
        className="form"
        type="text"
        placeholder="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      ></input>
      <input
        className="form"
        type="text"
        placeholder="reps"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
      ></input>
      <input
        className="form"
        type="text"
        placeholder="sets"
        value={sets}
        onChange={(e) => setSets(e.target.value)}
      ></input>
      <input
        className="form"
        type="text"
        placeholder="weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      ></input>
      <button className="form-button" type="submit" onSubmit={handleSubmit}>
        Log
      </button>
    </form>
  );
}

export default Form;
