import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <Link to="/" className="navLink">
        Home
      </Link>

      <Link to="/about" className="navLink">
        About
      </Link>
    </nav>
  );
}

export default Navbar;
