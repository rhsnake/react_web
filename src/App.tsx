import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import Checkout from "./Pages/checkout";
import Layout from "./Layout";
import Riot from "./Pages/riot";
import Contact from "./Pages/contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/riot" element={<Riot />} />
          <Route path="/contact" element={<Contact />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
