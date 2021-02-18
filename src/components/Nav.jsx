import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <Link className="link-header" to="/">
        Home
      </Link>
      <Link className="link-header" to="form/">
        Log Your Progress
      </Link>
    </nav>
  );
}
export default Nav;
