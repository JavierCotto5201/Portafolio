import React from "react";
import imagen3 from './imagenes/Imagen3.jpg';
import "./item3.sass";

class item3 extends React.Component {
    render() {
      return (
        <div id = "card3" className="card width: 18rem;">
            <img id = "carta3" className="card-img-top" src={imagen3} alt="Card image cap"></img>
            <div className="card-body">
                <h5 className="card-title">Memoria</h5>
                <p className="card-text">Juego de memoria utilizando el framework de React</p>
                <a href="http://stw-uvg.site/labs/lab08/Cotto19324/dist/" className="btn btn-primary" target="_blank">Ver Resultado</a>
            </div>
        </div>
      )
    }
  }
  export default item3;