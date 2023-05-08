import "./App.css";
import Home from "./components/home";
import About from "./components/about";
import Vans from "./components/vans";
import VanDetail from "./components/vanDetail";
import PopupPrueba from "./components/popup"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./server";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
        <Route path="/vans/popup" element={<PopupPrueba/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
