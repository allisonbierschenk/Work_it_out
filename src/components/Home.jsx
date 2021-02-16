import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import { baseURL, config } from "../services";
import axios from "axios";
import Legs from "./Legs";

function Home(props) {
  return (
    //I need to link the buttons to the arms, abs, cardio etc pages.
    <div>
      <h1 className="homepage-header">The Workout Tracker App</h1>
      <h2 className="homepage-subhead">
        Log your workouts and track your progress
      </h2>
      <div className="homepage-buttons">
        <div className="homepage-left-buttons">
          {/* <Route path="/legs">
            <Legs>
              <button className="button">Legs</button>
            </Legs>
          </Route> */}
          <Link to="/legs">
            <button className="button">Legs</button>
          </Link>
          <Link to="/arms">
            <button>Arms</button>
          </Link>
          <Link to="/back">
            <button>Back</button>
          </Link>
        </div>
        <div className="homepage-right-buttons">
          <Link to="/abs">
            <button>Abs</button>
          </Link>
          <Link to="/cardio">
            <button>Cardio</button>
          </Link>
          <Link to="/recovery">
            <button>Recovery</button>
          </Link>
        </div>
      </div>
      <div>
        <Link to="/form">
          <button>Log a New Workout</button>
        </Link>
      </div>
    </div>
  );
}
export default Home;
