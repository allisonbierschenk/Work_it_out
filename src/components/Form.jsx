import { baseURL, config } from "../services";
import { useState } from "react";
import axios from "axios";

function Form(props) {
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [reps, setReps] = useState("");
  const [sets, setSets] = useState("");
  const [weight, setWeight] = useState("");
  const [workout, setWorkout] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newWorkout = {
      category,
      workout,
      date,
      time,
      reps,
      sets,
      weight,
    };
    await axios.post(baseURL, newWorkout);
    props.setToggleFetch((curr) => !curr);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="category: legs, abs, back, arms, cardio, recovery"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="workout"
        value={workout}
        onChange={(e) => setWorkout(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="reps"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="sets"
        value={sets}
        onChange={(e) => setSets(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      ></input>
      <button type="submit" onClick={handleSubmit}>
        Log
      </button>
    </form>
  );
}

export default Form;
