import React from "react";
import imagen7 from './imagenes/Imagen7.png'
import "./item7.sass";

class item7 extends React.Component {
    render() {
      return (
        <div id = "card7" className="card width: 18rem;">
            <img id = "carta7" className="card-img-top" src={imagen7} alt="Card image cap"></img>
            <div className="card-body">
                <h5 className="card-title">Si quieres saber más...</h5>
                <p className="card-text">Puedes encontrar otros trabajos en el siguiente repositorio</p>
                <a href="https://github.com/JavierCotto5201" className="btn btn-primary" target="_blank">Ver Repositorio</a>
            </div>
        </div>
      )
    }
  }
  export default item7;