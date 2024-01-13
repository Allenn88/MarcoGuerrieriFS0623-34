import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style/Home.css";

const Home = () => {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateCity(city)) {
      navigate(`/dettaglio?city=${encodeURIComponent(city)}`);
    } else {
      alert("Il nome della città non è valido. Inserisci solo caratteri alfabetici e spazi.");
    }
  };

  const validateCity = (input) => {
    const regex = /^[a-zA-Z\s]+$/;
    return regex.test(input.trim());
  };

  return (
    <div>
      <h2 className="Title">Meteo</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Inserisci il nome della città:
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
        </label>
        <button type="submit">Cerca</button>
      </form>
    </div>
  );
};

export default Home;
