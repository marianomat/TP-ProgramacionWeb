
import {Link} from "react-router-dom";
import "./Home.css"
import header from "./header.jpg"

function Home(){
    return(
        <div id="home-container">
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
                <div className="container">
                    <a className="navbar-brand" href="/"></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <a className="nav-link " aria-current="page" href="#home-caracteristicas">Características</a>
                            <a className="nav-link" href="#home-historia">Guía</a>
                            <Link className="nav-link  btn btn-sm btn-primary p-2" id="home-ingresar"
                               to="/login" tabIndex="-1" aria-disabled="true">Ingresar</Link>
                        </div>
                    </div>
                </div>
            </nav>
            <header>
                <div className="container-fluid">
                    <div id="gif-row" className="row">
                        <div id="home-img" className="col">
                            <h1 id="home-titulo">MIS TURNOS</h1>
                            <p id="gif-p">Administrá tus turnos facilmente</p>
                            <Link to="/Singin">
                                <button id="home-img-btn" type="button" className="btn btn-lg btn-primary">REGISTRARME
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <div className="container" id="home-caracteristicas">
                    <div className="row">
                        <h2 className="d-block d-md-none text-center mt-5 mb-3">PROYECTO</h2>
                        <div className="col-12 col-md-8">
                            <h2 className="d-none d-md-block">SOBRE MISTURNOS.COM</h2>
                            <p>Nuestra plataforma ofrece la oportunidad de que gestiones tus turnos vos mismo de una
                                menera fácil y práctica</p>
                            <p>Brinda informacion detallada sobre tus turnos y posee un registro sobre los pagos</p>
                            <h3 className="mt-3">Características:</h3>
                            <ul>
                                <li>Perfil con informacion resumida</li>
                                <li>Gestor de turnos donde puedes habilitar, modificar y eliminarlos</li>
                                <li>El paciente sólo necesita el link y puede reservar el turno rápidamente</li>
                                <li>Soporte mobile.</li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-4 d-flex">
                        </div>
                    </div>
                </div>

                <div className="container">
                    <hr className="mt-5"/>
                        <div className="row">
                        </div>
                        <div id="home-historia" className="row my-3">
                            <h2 className="mt-2 text-center d-block d-md-none mb-3">GUIA DE USO</h2>
                            <div className="d-none d-md-block col-md-4">
                            </div>
                            <div id="home-historia-col" className="col-12 col-md-8">
                                <h2 className="mt-2 text-center d-none d-md-block">GUIA DE USO</h2>
                                <ol>
                                    <li>Te creás una cuenta e ingresas.</li>
                                    <li>Habilitás los turnos en los días y horarios que vos quieras</li>
                                    <li>Le mandas el link de registro a tus pacientes</li>
                                    <li>El paciente registra su turno y listo!</li>
                                </ol>
                            </div>
                        </div>
                </div>

            </main>
        </div>
          
            )
} 
export default Home ;