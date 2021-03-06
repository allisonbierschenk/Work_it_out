import axios from "axios";
import { queryURL, config } from "../services";

function Delete(props) {
  const deleteButton = async () => {
    const URL = `${queryURL}/${props.legObjectID.id}`;
    await axios.delete(URL, config);
    props.setToggleFetch((curr) => !curr);
  };
  return (
    <div>
      <button className="delete-button" onClick={deleteButton}>
        x
      </button>
    </div>
  );
}
export default Delete;
