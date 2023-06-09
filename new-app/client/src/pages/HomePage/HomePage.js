import "./HomePage.css";
import React from "react";
import phones from "../../data/phones.json";
import { useState } from "react";
import PhoneBox from "../../components/PhoneBox/PhoneBox";

function HomePage() {
  const [phonesList, setPhonesList] = useState(phones);
  const [phonesToRender, setPhonesToRender] = useState(phones);

  const addPhones = (phones) => {
    setPhonesList([...phonesList, phones]);
    setPhonesToRender([...phonesList, phones]);
  };

  return (
    <div>
      <h1>Welcome to The Phone Cave</h1>

      <h2>Our Catalog</h2>
      <div className="phoneGrid">
        {phonesToRender.map((eachPhone, index) => {
          return (
            <PhoneBox eachPhoneProps={eachPhone} key={index + eachPhone.name} />
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
