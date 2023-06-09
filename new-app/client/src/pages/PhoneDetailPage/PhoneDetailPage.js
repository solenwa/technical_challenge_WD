import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function PhoneDetailPage() {
  const { id } = useParams();

  const [phoneDetails, setPhoneDetails] = useState(null);
  const getDetails = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/phones/${id}`
      );
      // Here I needed to import a vite config as well
      setPhoneDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  if (!phoneDetails) {
    return (
      <div>
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div>
      <h1>{phoneDetails.name}</h1>
      <h2>{phoneDetails.manufacturer}</h2>
      <p>{phoneDetails.description}</p>
      <p>{phoneDetails.price}</p>
    </div>
  );
}

export default PhoneDetailPage;
