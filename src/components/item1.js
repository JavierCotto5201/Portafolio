import React from "react";
import imagen1 from './imagenes/Imagen1.jpg'
import "./item1.sass";

class item1 extends React.Component {
    render() {
      return (
        <div id = "card1" className="card width: 18rem;">
            <img id = "carta1" className="card-img-top" src={imagen1} alt="Card image cap"></img>
            <div className="card-body">
                <h5 className="card-title">Kylo Ren</h5>
                <p className="card-text">Un laboratorio que consistia en elaborar una replica de una imagen mediante CSS</p>
                <a href="http://stw-uvg.site/labs/lab04/Cotto19324/estructura.html" className="btn btn-primary" target="_blank">Ver Resultado</a>
            </div>
        </div>
      )
    }
  }
  export default item1;