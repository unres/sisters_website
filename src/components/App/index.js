import React from "react";

import Temp from "../Temp";

import "./App.css";

//https://itnext.io/responsive-background-images-using-react-hooks-941af365ea1f

const App = () => {
  return (
    <div className="App" style={{ backgroundImage: "url(/img/IMG_8858.jpg)" }}>
      <div className="App-content">
        <h1>Coming Soon!</h1>
      </div>
    </div>
  );
};

export default App;
