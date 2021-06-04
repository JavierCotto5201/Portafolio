import React from "react";
import imagen2 from './imagenes/Imagen2.jpg'
import "./item2.sass";

class item2 extends React.Component {
    render() {
      return (
        <div id="card2" className="card width: 18rem;">
            <img id="carta2" className="card-img-top" src={imagen2} alt="Card image cap"></img>
            <div className="card-body">
                <h5 className="card-title">Chat entre la Clase del curso de Sistemas Web</h5>
                <p className="card-text">Un laboratorio que consistia en elaborar un chat entre la clase utilizando solamente JavaScript</p>
                <a href="http://stw-uvg.site/labs/lab06/Cotto19324/principalChat.html" className="btn btn-primary" target="_blank">Ver Resultado</a>
            </div>
        </div>
      )
    }
  }
  export default item2;