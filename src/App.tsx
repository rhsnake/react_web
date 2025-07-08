import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import Help from "./Pages/help";
import Layout from "./Layout";
import Riot from "./Pages/riot";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/help" element={<Help />} />
          <Route path="/riot" element={<Riot />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
