import axios from "axios";
import { queryURL, config } from "../services";

function Delete(props) {
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const resp = await axios.get(baseURL, config);
      setWorkouts(resp.data.records);
    };
    fetchWorkouts();
  }, [toggleFetch]);

  const deleteButton = async () => {
    const URL = `${queryURL}/${props.workouts.id}`;
    await axios.delete(URL, config);
    props.setToggleFetch((curr) => !curr);
  };
  return (
    <div>
      <button className="delete-button" onClick={deleteButton}>
        Delete
      </button>
    </div>
  );
}
export default Delete;
