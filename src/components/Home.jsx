import { Link } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    //I need to link the buttons to the arms, abs, cardio etc pages.
    <div className="full-page-home" className="full-page-home-overlay">
      <h1 className="homepage-header">The Workout Tracker App</h1>
      <h2 className="homepage-subhead">
        Log your workouts to track your progress
      </h2>
      <div className="homepage-buttons">
        <div className="homepage-left-buttons">
          <Link to="/legs">
            <button className="button">Legs</button>
          </Link>
          <Link to="/arms">
            <button className="button">Arms</button>
          </Link>
          <Link to="/back">
            <button className="button">Back</button>
          </Link>
        </div>
        <div className="homepage-right-buttons">
          <Link to="/abs">
            <button className="button">Abs</button>
          </Link>
          <Link to="/cardio">
            <button className="button">Cardio</button>
          </Link>
          <Link to="/recovery">
            <button className="button">Recovery</button>
          </Link>
        </div>
      </div>
      <div>
        <Link to="/form">
          <button className="home-form-button">Log Your Progress</button>
        </Link>
      </div>
    </div>
  );
}
export default Home;
