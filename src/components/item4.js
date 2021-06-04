import React from "react";
import imagen4 from './imagenes/Imagen4.jpg';
import "./item4.sass";

class item4 extends React.Component {
    render() {
      return (
        <div id = "card4" className="card width: 18rem;">
            <img id = "carta4" className="card-img-top" src={imagen4} alt="Card image cap"></img>
            <div className="card-body">
                <h5 className="card-title">Cálculadora Básica</h5>
                <p className="card-text">Cálculadora hecha mediante los frameworks de React, Webpack y con lenguaje JavaScript, HTML, CSS</p>
                <a href="http://stw-uvg.site/labs/lab10/Cotto19324/dist/index.html" className="btn btn-primary" target="_blank">Ver Resultado</a>
            </div>
        </div>
      )
    }
  }
  export default item4;