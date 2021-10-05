import "./Turnos.css";

function Turnos() {

    return (
        <div className="contenido">
            <div className="contenido-tabla">
                <h2>Turnos</h2>
                <div className="form-grupo">
                    <label htmlFor="fechas-turnos">Seleccionar Fecha</label>
                    <input id="fechas-turnos" type="date"/>
                </div>
                <h6>Turnos para el 15/01/21</h6>
                <table>
                    <thead>
                    <tr>
                        <th>Horario</th>
                        <th>Paciente</th>
                        <th>Razon</th>
                        <th>Pagado</th>
                        <th>Modificar</th>
                        <th>Eliminar</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="td-horario">15:15</td>
                        <td>Carlos</td>
                        <td>Consulta</td>
                        <td>NO</td>
                        <td className="td-edit"><i className="fas fa-edit"></i></td>
                        <td className="td-delete"><i className="fas fa-trash-alt"></i></td>
                    </tr>
                    <tr>
                        <td className="td-horario">15:15</td>
                        <td>Carlos</td>
                        <td>Consulta</td>
                        <td>NO</td>
                        <td className="td-edit"><i className="fas fa-edit"></i></td>
                        <td className="td-delete"><i className="fas fa-trash-alt"></i></td>
                    </tr>
                    <tr>
                        <td className="td-horario">15:15</td>
                        <td>Carlos</td>
                        <td>Consulta</td>
                        <td>NO</td>
                        <td className="td-edit"><i className="fas fa-edit"></i></td>
                        <td className="td-delete"><i className="fas fa-trash-alt"></i></td>
                    </tr>
                    <tr>
                        <td className="td-horario">15:15</td>
                        <td>Carlos</td>
                        <td>Consulta</td>
                        <td>NO</td>
                        <td className="td-edit"><i className="fas fa-edit"></i></td>
                        <td className="td-delete"><i className="fas fa-trash-alt"></i></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Turnos;