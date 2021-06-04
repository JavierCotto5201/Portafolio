import React from "react";
import imagen6 from './imagenes/Imagen6.jpg'
import "./item6.sass";

class item6 extends React.Component {
    render() {
      return (
        <div id = "card6" className="card width: 18rem;">
            <img id = "carta6" className="card-img-top" src={imagen6} alt="Card image cap"></img>
            <div className="card-body">
                <h5 className="card-title">Yo, Javier Cotto</h5>
                <p className="card-text">Estudiante de la Universidad Del Valle les presento mi mas humilde trabajo, 
                en el cúal se puede ver presentado mi conocimiento hasta la fecha sobre las tecnologías web. Dentro del
                portafolio se pueden ver varias tecnologías involucradas de la mejor manera lograda por mi, pero siempre
                dispuesto a mejorar y ha aprender sobre ello.</p>
            </div>
        </div>
      )
    }
  }
  export default item6;