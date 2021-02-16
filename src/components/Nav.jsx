import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="form/">Log Your Progress</Link>
    </nav>
  );
}
export default Nav;
