import { baseURL, config } from "../services";
import { useState, useEffect } from "react";
import axios from "axios";

function Legs(props) {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const resp = await axios.get(baseURL, config);
      setWorkouts(resp.data.records);
    };
    fetchWorkouts();
  }, []);

  return (
    <div>
      <h3></h3>
    </div>
  );
}

export default Legs;
