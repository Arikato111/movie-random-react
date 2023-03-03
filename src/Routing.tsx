import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { checkTheme } from "./components/CheckTheme";
import ToggleMode from "./components/ToggleMode";
import Home from "./pages/Home";
import Movies from "./pages/Movies";

const Routing: FC = ()=> {
  checkTheme()
  return <Router>
  <ToggleMode />  
    <Routes>
      <Route path="/movies" element={<Movies />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
    </Routes>
  </Router>
}

export default Routing;