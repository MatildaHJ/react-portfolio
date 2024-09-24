import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import "./styles/global.scss";
import "./styles/App.css";

export default function App() {
  const currentHour = new Date().getHours();
  const isNight = currentHour >= 19 || currentHour < 7;

  return (
    <div style={{ backgroundColor: isNight ? "#2b232d" : "#857C87" }}>
      <Router>
        <div className="container">
          <Navbar isNight={isNight} />
          <Routes>
            <Route path="/" element={<Home isNight={isNight} />} />
            <Route path="/about" element={<About isNight={isNight} />} />
            <Route path="/projects" element={<Portfolio isNight={isNight} />} />
            <Route path="/contact" element={<Contact isNight={isNight} />} />
          </Routes>
          <Footer isNight={isNight} />
        </div>
      </Router>
    </div>
  );
}
