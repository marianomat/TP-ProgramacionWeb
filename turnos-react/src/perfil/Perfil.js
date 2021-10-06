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

function Perfil() {
    return (
        <div>
            <NavPerfil/>
            <section className="main">
                <MenuPerfil/>
                <Switch>
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