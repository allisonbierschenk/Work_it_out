import { baseURL, config } from "./services";
import { Link, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Legs from "./components/Legs";
import "./App.css";

function App() {
  const [workouts, setWorkouts] = useState([]);
  console.log(workouts);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const resp = await axios.get(baseURL, config);
      setWorkouts(resp.data.records);
    };
    fetchWorkouts();
  }, []);

  return (
    <div className="body">
      <Nav />
      <div className="home">
        <Route exact path="/">
          <Home workouts={workouts} />
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
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
