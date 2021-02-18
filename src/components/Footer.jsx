import { Link } from "react-router-dom";

function Footer() {
  return (
    <nav className="footer">
      <Link className="link-footer" to="/">
        Home
      </Link>
      <Link className="link-footer" to="/form">
        Tracker
      </Link>
      <Link className="link-footer" to="/legs">
        Legs
      </Link>
      <Link className="link-footer" to="/arms">
        Arms
      </Link>
      <Link className="link-footer" to="/back">
        Back
      </Link>
      <Link className="link-footer" to="/abs">
        Abs
      </Link>
      <Link className="link-footer" to="/cardio">
        Cardio
      </Link>
      <Link className="link-footer" to="/recovery">
        Recovery
      </Link>
    </nav>
  );
}
export default Footer;
