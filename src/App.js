import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../src/components/Home.jsx";
import Dettaglio from "./components/Dettaglio.jsx";
import Navbar from "../src/components/Navbar.jsx";
import MyFooter from "../src/components/MyFooter.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dettaglio" element={<Dettaglio />} />
      </Routes>
      <MyFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
