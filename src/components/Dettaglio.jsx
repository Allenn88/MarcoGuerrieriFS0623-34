import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Previsioni from "./Previsioni";
import 'bootstrap-icons/font/bootstrap-icons.css';


const apiKey = 'c00b7af7cfea8aa652ce50df23bb160b';
const gradiC = 273.15;

const WeatherComponent = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const cityParam = searchParams.get("city");

  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityParam)}&appid=${apiKey}`);
        if (!response.ok) {
          throw new Error('Errore nella chiamata API');
        }

        const data = await response.json();
        setWeatherData(data);
        console.log('Risposta API:', data);
      } catch (error) {
        console.error('Errore durante il recupero dei dati meteorologici:', error.message);
      }
    };

    fetchData();
  }, [cityParam]);

  return (
    <div className="container">
  <h2 className="text-center">Informazioni</h2>
  {weatherData ? (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <p className="text-center">{weatherData.name}</p>
        </div>
      </div>
      <div className="row justify-content-between">
        <div className="col-md-6">
          {weatherData.main && (
            <div>
              <p><i className="bi bi-thermometer-high"></i> {(weatherData.main.temp_max - gradiC).toFixed(2)}°C</p>
              <p><i className="bi bi-thermometer-half"></i> {(weatherData.main.temp_min - gradiC).toFixed(2)}°C</p>
              <p><i class="bi bi-droplet-fill"></i>{(weatherData.main.humidity)}%</p>
            </div>
          )}
        </div>
        <div className="col-md-6">
          {weatherData.weather && weatherData.weather[0] && (
            <p><i className="bi bi-cloud-sun-fill"></i> {weatherData.weather[0].description}</p>
          )}
          {weatherData.wind && (
            <div>
              <p><i className="bi bi-wind"></i> { (weatherData.wind.speed * 3.6).toFixed(2) } km/h</p>
              <p><i className="bi bi-tornado"></i> {weatherData.wind.gust * 3.6}</p>
            </div>
          )}
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        <Previsioni />
      </div>
    </div>
  ) : (
    <p className="text-center">Caricamento...</p>
  )}
</div>
)}

export default WeatherComponent;
