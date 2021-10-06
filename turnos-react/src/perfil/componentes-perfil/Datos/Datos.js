import "./Datos.css";
import {Link} from "react-router-dom";

function Datos() {
    return (
        <div className="datos-contenido">
            <h2>Datos personales</h2>
            <ul>
                <li><b>Nombre de usuario: </b>carlos123</li>
                <li><b>Nombre:</b> Carlos</li>
                <li><b>Apellido:</b> Perez</li>
                <li><b>DNI:</b> 123123123</li>
                <li><b>Email:</b> carlos@carlos.com</li>
                <li><b>Direccion:</b> Urquiza 1234</li>
            </ul>
            <div className="botones-datos">
                <Link id="boton-modificar-datos" to="/perfil/datos/form">Modificar Datos</Link>
                <Link id="boton-eliminar-datos" to="">Eliminar Cuenta</Link>
            </div>
        </div>
    )
}

export default Datos;