import { baseURL, config } from "./services";
import { Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Home from "./components/Home";
import Legs from "./components/Legs";
import Nav from "./components/Nav";
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
      <Route path="/legs">
        <Legs workouts={workouts} />
      </Route>
      {/* <Route path="/abs">
        <Abs />
      </Route>
      <Route path="/arms">
        <Arms />
      </Route>
      <Route path="/cardio">
        <Cardio />
      </Route>
      <Route path="/back">
        <Back />
      </Route>
      <Route path="/recovery">
        <Recovery />
      </Route> */}
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
