import { Link } from "react-router-dom";
import "./PhoneBox.css";

function PhoneBox(props) {
  const { id, imageFileName, name, manufacturer, description, color, price } =
    props.eachPhoneProps;
  return (
    <div className="phoneBox">
      <Link to={`/phones/${id}`}>
        <img
          src={require(`../../assets/images/${imageFileName}`)}
          alt={name}
          width="200px"
        />

        <h3>
          <strong>{name}</strong>
        </h3>
        <h4>{manufacturer}</h4>
        <p>{price} €</p>
      </Link>
    </div>
  );
}

export default PhoneBox;
