import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="row">
          <div className="Link">
            <Link to="#">
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
          </div>
          <div className="Link">
            <Link to="#">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </div>
        </div>
        <div className="row">
          <ul>
            <li>
              <Link to="#">About us</Link>
            </li>
            <li>
              <Link to="#">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="#">Contact us</Link>
            </li>
          </ul>
        </div>
        <div className="row">
          <p>© 2023 The Phone Cave - All rights reserved</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
