import React from "react";
import './navbar.sass';

export default class navbar extends React.Component {
  render() {
    return (
        <nav id="navi"className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Portafolio</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a id="navi_link" className="nav-link" href ="https://www.instagram.com/cotto5201/" target="_blank">Instagram <span className="sr-only"></span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.facebook.com/javier.cotto.5872" target="_blank">Facebook</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://twitter.com/Javier_Cotto52" target="_blank">Twitter</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://open.spotify.com/artist/5n65pgef4hFl8yPfEd5yT0?si=rpLRgidvR4m9MfXybdzCPw&utm_source=whatsapp" target="_blank">Spotify</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">JAVIER ALEJANDRO COTTO ARGUETA</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}