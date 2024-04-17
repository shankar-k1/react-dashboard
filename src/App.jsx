import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { About, Options, Home, Services , ciahome } from "./components/pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/info" element={<Options />} />
        <Route path="/cia" element={<ciahome />} />
      </Routes>
    </div>
  );
}

export default App;
