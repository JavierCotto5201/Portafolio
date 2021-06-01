import React from "react";
import Tablero from "./Tablero";
import "./App.css";
import bootstrap from 'bootstrap';

class StartApp extends React.Component {
  render() {
    return (
      <div id="App">
        <Tablero></Tablero>
      </div>
    )
  }
}
export default StartApp;