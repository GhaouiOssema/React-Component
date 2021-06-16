import React from 'react'
import './App.css'

// Components 
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import FullName from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";

function App() {
  return (
    <div className="App">
      <div className="Cart">
        <ProfilePhoto />
        <div className="part">
          <FullName />
          <Address />
        </div>
      </div>
      <div className="description">
        <label>Student At</label>
        <img
          src="https://fabskill.com/assets/img/bus_cover/cropped/63_1565191317.webp"
          alt="Go My Code"
        />
      </div>
    </div>
  );
}

export default App;
