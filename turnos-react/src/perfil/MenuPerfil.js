import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import "./MenuPerfil.css"

function MenuPerfil(){
    React.useEffect(() => {
        console.log("hola")
        /* Da la funcionalidad para que el menu aparezca y desaparezca segun el tamaño de pantalla*/

        // Selecciono los elementos de HTML
        let menuPerfil = document.querySelector("#menu-perfil");
        let botonMenu = document.querySelector("#menu-icono");

        //En html el menu esta visible por defecto, entonces si se ingresa a la pagina con una pantalla chica, el menu hamburguesa aparece abierto
        // Para evitar esto usamos el media query de js para darle hidden true
        if (window.matchMedia("(max-width: 1200px)").matches) {
            menuPerfil.hidden = true;
        }
            //Escucha si se redimensiona la pantalla, es para cuando estaba en una pantalla chica con el menu hidden y se agranda no siga con hidden y se muestre el menu
        window.addEventListener("resize", (e) => {
                if (window.matchMedia("(min-width: 1200px)").matches) {
                    menuPerfil.hidden = false;
                } else {
                    menuPerfil.hidden = true;
                }
            }
        )
        // Escucha si se apreta el boton hamburguesa mobile para mostrar el menu o cerrarlo
        botonMenu.addEventListener("click", (e) => {
            menuPerfil.toggleAttribute("hidden");
        })
    }, []);

    return(
        <div id="menu-perfil" className="menu-container">
            <div className="menu" hidden>
                <h3 className="menu-titulo">Menu</h3>
                <Link to="/perfil/" className="menu-button">
                    <i className="fas fa-chart-line"></i> <h5>Dashboard</h5>
                </Link>
                <Link to="/perfil/turnos" className="menu-button">
                    <i className="far fa-calendar-alt"></i> <h5>Turnos</h5>
                </Link>
                <Link to="/perfil/horarios" className="menu-button">
                    <i className="far fa-clock"></i> <h5>Horarios</h5>
                </Link>
                <Link to="/perfil/pagos" className="menu-button">
                    <i className="fas fa-wallet"></i> <h5>Pagos</h5>
                </Link>
                <Link to="/perfil/datos" className="menu-button">
                    <i className="fas fa-window-maximize"></i> <h5>Datos</h5>
                </Link>
                <Link to="/perfil/" className="menu-button">
                    <i className="fas fa-times-circle"></i> <h5>Salir</h5>
                </Link>
            </div>
        </div>
    )
}

export default MenuPerfil;