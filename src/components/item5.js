import React from "react";
import imagen5 from './imagenes/Imagen5.jpg';
import "./item5.sass";

class item5 extends React.Component {
    render() {
      return (
        <div id = "card5" className="card width: 18rem;">
            <img id = "carta5" className="card-img-top" src={imagen5} alt="Card image cap"></img>
            <div className="card-body">
                <h5 className="card-title">Sitio DEMO ECOMMERCE Modulo de Usuario</h5>
                <p className="card-text">Junto a varias tecnologías(React, Webpack, Manejo de Servidores, Firebase) se realizo una Demo de Ecommerce</p>
                <a href="https://proyecto2dev.stw-uvg.site/" className="btn btn-primary" target="_blank">Ver Resultado</a>
            </div>
        </div>
      )
    }
  }
  export default item5;