import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../src/components/Home.jsx";
import Dettaglio from "./components/Dettaglio.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dettaglio" element={<Dettaglio />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
