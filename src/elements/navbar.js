import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="home">La Voce Nuova</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

                            <li className="nav-item">
                                <a className="nav-link" href="home">Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="associazioni">Le Associazioni</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="leggi">Leggi</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="scienzamedicina">Scienza e Medicina</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="cultura">Cultura</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="fede">Fede</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="curiosita">Curiosità</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="giornale">Giornale Completo</a>
                            </li>

                        </ul>

                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;