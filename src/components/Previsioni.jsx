import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./style/Previsioni.css";

const apiKey = 'c00b7af7cfea8aa652ce50df23bb160b';
const gradiC = 273.15;

const Previsioni = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const cityParam = searchParams.get("city");

  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    const fetchForecastData = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(cityParam)}&appid=${apiKey}`);
        if (!response.ok) {
          throw new Error('Errore nella chiamata API per le previsioni');
        }

        const data = await response.json();
        setForecastData(data);
        console.log('Risposta API Previsioni:', data);
      } catch (error) {
        console.error('Errore durante il recupero dei dati delle previsioni:', error.message);
      }
    };

    fetchForecastData();
  }, [cityParam]);

  return (
    <div className="previsioni-container">
      <h2>Previsioni per i prossimi giorni</h2>
      {forecastData ? (
        <div>
          {forecastData.list.map((item, index) => (
            <div
              key={index}
              className={`previsioni-row ${item.weather && item.weather[0] ? item.weather[0].main.toLowerCase() : ''}`}
            >
              <p><i class="bi bi-calendar"></i> {item.dt_txt}</p>
              {item.main && (
                <>
                  <p><i class="bi bi-thermometer-high"></i> {(item.main.temp_max - gradiC).toFixed(2)}°C</p>
                  <p><i class="bi bi-thermometer-half"></i> {(item.main.temp_min - gradiC).toFixed(2)}°C</p>
                </>
              )}
              {item.weather && item.weather[0] && (
                <p><i class="bi bi-cloud-sun-fill"></i>{item.weather[0].description}</p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>Caricamento previsioni...</p>
      )}
    </div>
  );
};

export default Previsioni;
