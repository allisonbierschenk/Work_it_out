import { baseURL, config } from "./services";
import { Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Abs from "./components/Abs";
import Arms from "./components/Arms";
import Back from "./components/Back";
import Cardio from "./components/Cardio";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Home from "./components/Home";
import Legs from "./components/Legs";
import Nav from "./components/Nav";
import Recovery from "./components/Recovery";
import axios from "axios";
import "./App.css";

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const resp = await axios.get(baseURL, config);
      setWorkouts(resp.data.records);
    };
    fetchWorkouts();
  }, [toggleFetch]);

  return (
    <div className="body">
      <Nav />
      <Route exact path="/">
        <Home workouts={workouts} />
      </Route>
      <Route path="/form">
        <Form workouts={workouts} setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/edit/:id">
        <Form workouts={workouts} setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/legs">
        <Legs workouts={workouts} setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/abs">
        <Abs workouts={workouts} setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/arms">
        <Arms workouts={workouts} setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/cardio">
        <Cardio workouts={workouts} setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/back">
        <Back workouts={workouts} setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/recovery">
        <Recovery workouts={workouts} setToggleFetch={setToggleFetch} />
      </Route>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
