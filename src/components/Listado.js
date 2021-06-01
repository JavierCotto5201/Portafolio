import React from 'react';
import {ListadoData} from './ListadoData';
import "./lista.css";
import bootstrap from 'bootstrap'

export default class Listado extends React.Component {
    render() {
      return (
          <div className="Listado">
            {
                ListadoData.map((item, index) => {
                    return(
                        <div key={index}>
                                <div className="contenido">
                                    <i>{item.title}</i>
                                </div>

                                <div className="portada"> 
                                    <i>{item.description}</i>
                                </div>
                                <button><a href={item.path}>Hola, soy un boton</a></button>
                        </div>
                    );
                })
            }
          </div>     
      );
    }
  }
