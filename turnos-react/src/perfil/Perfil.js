import './Perfil.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import NavPerfil from "./componentes-perfil/NavPerfil";
import MenuPerfil from "./componentes-perfil/MenuPerfil";
import Turnos from "./componentes-perfil/Turnos/Turnos";
import Dashboard from "./componentes-perfil/Dashboard/Dashboard";
import Horarios from "./componentes-perfil/Horarios/Horarios";
import Pagos from "./componentes-perfil/Pagos/Pagos";
import Datos from "./componentes-perfil/Datos/Datos";
import DatosForm from "./componentes-perfil/DatosForm/DatosForm";
import {useState} from "react";
import TurnosForm from "./componentes-perfil/TurnosForm/TurnosForm";

function Perfil() {
    //Usamos el state para ir cambiando la visiblidad del menu en version mobile
    //Cuando se invoca esta funcion handleCallback cambia el estado de visible a hidden y viceversa
    //El state es usado por el elemento hijo MenuPerfil para determinar si tiene o no que ser visible
    const [menuVisible, setMenuVisible] = useState("hidden");
    function handleCallback() {
        menuVisible === "hidden" ? setMenuVisible("visible") : setMenuVisible("hidden");
    }
    //Esta funcion permite que cuando se invoque en el elemento hijo menu, al seleccionar una opcion se cierre.
    function handleCerrarMenu() {
        setMenuVisible("hidden");
    }
    return (
        <div>
            <NavPerfil handleClick={handleCallback}/>
            <section className="main">
                <MenuPerfil visibilidadMenu={menuVisible} handleCerrarMenu={handleCerrarMenu}/>
                <Switch>
                    <Route path="/perfil/turnos/:id">
                        <TurnosForm />
                    </Route>
                    <Route path="/perfil/turnos">
                        <Turnos />
                    </Route>
                    <Route path="/perfil/horarios">
                        <Horarios />
                    </Route>
                    <Route path="/perfil/pagos">
                        <Pagos />
                    </Route>
                    <Route path="/perfil/datos/form">
                        <DatosForm />
                    </Route>
                    <Route path="/perfil/datos">
                        <Datos />
                    </Route>
                    <Route path="/perfil/">
                        <Dashboard />
                    </Route>
                </Switch>
            </section>
        </div>
    )
}

export default Perfil;