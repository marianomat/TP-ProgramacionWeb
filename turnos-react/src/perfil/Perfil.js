import './Perfil.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import NavPerfil from "./NavPerfil";
import MenuPerfil from "./MenuPerfil";
import Turnos from "./Turnos";

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
                    {/*<Route path="/perfil/horarios">*/}
                    {/*    <Horarios />*/}
                    {/*</Route>*/}
                    {/*<Route path="/perfil/pagos">*/}
                    {/*    <Pagos />*/}
                    {/*</Route>*/}
                    {/*<Route path="/perfil/datos">*/}
                    {/*    <Datos />*/}
                    {/*</Route>*/}
                    {/*<Route path="/perfil/">*/}
                    {/*    <Dashboard />*/}
                    {/*</Route>*/}
                </Switch>
            </section>
        </div>
    )
}

export default Perfil;