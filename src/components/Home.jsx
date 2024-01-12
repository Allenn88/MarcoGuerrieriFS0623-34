import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
      navigate(`/dettaglio?city=${encodeURIComponent(city)}`);
    }
  };

  return (
    <div>
      <h2>Ricerca Meteo</h2>
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
