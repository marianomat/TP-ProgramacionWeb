import {Link} from "react-router-dom";
import './NavPerfil.css';

function NavPerfil() {
    return (
        <nav className="perfil-navbar">
            <Link href="#">Perfil de Usuario</Link>
            <Link id="nav-usuario" href="#">PsicCarlos22</Link>
            <div id="menu-icono" href=""><i className="fas fa-bars"></i></div>
        </nav>
    )
}

export default NavPerfil;