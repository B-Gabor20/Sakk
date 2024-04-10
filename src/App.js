import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import  {SakkList} from "./SakkList.js";
import { SakkSingleElement } from "./SakkSingleElement.js";
import  {SakkCreate} from "./SakkCreate.js";
import { SakkMod } from "./SakkMod.js";
import { SakkDelete } from "./SakkDelete.js";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={`/`} className="nav-link">
                <span className="nav-link">Főoldal</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/uj-Sakk`} className="nav-link">
                <span className="nav-link">Új Sakkmaister</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<SakkList/>}/>
        <Route path="/chess/:SakkId" element={<SakkSingleElement/>}/>
        <Route path="/uj-Sakk" element={<SakkCreate/>}/>
        <Route path="/mod-Sakk/:SakkId" element={ <SakkMod /> } />
        <Route path="/delete-Sakk/:SakkId" element={ <SakkDelete /> } />
      </Routes>
    </Router>
  );
}

export default App;
