import React from 'react';
import './App.css';
import HomePage from './Landing-Page/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import MainScreen from './Main-Screen/MainScreen';
import Admission from './Pages/Admission/Admission';
import AdmissionSecond from './Pages/About/AboutSecond';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/"  element={<HomePage/>}  ></Route>
          <Route path="/about"  element={<MainScreen/>}  ></Route>
          <Route path="/admission"  element={<Admission/>}  ></Route>
          <Route path="/Academics"  element={<AdmissionSecond/>}  ></Route>
        </Routes>
        </Router>
     
    </div>

  );
}

export default App;
