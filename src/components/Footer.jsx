import { Link } from "react-router-dom";

function Footer() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/form">Tracker</Link>
      <Link to="/legs">Legs</Link>
      <Link to="/arms">Arms</Link>
      <Link to="/back">Back</Link>
      <Link to="/abs">Abs</Link>
      <Link to="/cardio">Cardio</Link>
    </nav>
  );
}
export default Footer;
