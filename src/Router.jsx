import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import HaberDetay from "./components/HaberDetay";

function RouterConfig() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/news/:id" element={<HaberDetay />} />
      </Routes>
    </Router>
  );
}

export default RouterConfig;
