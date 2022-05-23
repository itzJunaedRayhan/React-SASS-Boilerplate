import React from "react";
import './sass/Style.scss'
import Hello from "./Components/Header";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Hello/>
      <Home/>
    </div>
  );
}

export default App;
