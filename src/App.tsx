import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import Help from './Pages/help';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="/help" element = {<Help />}/>
      </Routes>
    </Router>
  );
}

export default App;
