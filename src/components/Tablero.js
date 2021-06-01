import React from "react";
import "./Tablero.css";
import Listado from './Listado'


export default class Tablero extends React.Component {
  render() {
    return (
        <div id="Tablero">
          <Listado></Listado>
        </div>     
    );
  }
}