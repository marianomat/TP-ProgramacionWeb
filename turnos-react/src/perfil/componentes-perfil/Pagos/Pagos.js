import "./Pagos.css"

function Pagos() {
    return (
        <div className="pagos-contenido">
            <div className="pagos-contenido-tabla">
                <h2>Pagos</h2>
                <table>
                    <thead>
                    <tr>
                        <th>cod pago</th>
                        <th>Paciente</th>
                        <th>Turno</th>
                        <th>Monto</th>
                        <th>Modificar</th>
                        <th>Eliminar</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="pagos-td-horario">123123123</td>
                        <td>Carlos</td>
                        <td>123</td>
                        <td>$500</td>
                        <td className="pagos-td-edit"><i className="fas fa-edit"></i></td>
                        <td className="pagos-td-delete"><i className="fas fa-trash-alt"></i></td>
                    </tr>
                    <tr>
                        <td className="pagos-td-horario">123123123</td>
                        <td>Carlos</td>
                        <td>123</td>
                        <td>$500</td>
                        <td className="pagos-td-edit"><i className="fas fa-edit"></i></td>
                        <td className="pagos-td-delete"><i className="fas fa-trash-alt"></i></td>
                    </tr>
                    <tr>
                        <td className="pagos-td-horario">123123123</td>
                        <td>Carlos</td>
                        <td>123</td>
                        <td>$500</td>
                        <td className="pagos-td-edit"><i className="fas fa-edit"></i></td>
                        <td className="pagos-td-delete"><i className="fas fa-trash-alt"></i></td>
                    </tr>
                    <tr>
                        <td className="pagos-td-horario">123123123</td>
                        <td>Carlos</td>
                        <td>123</td>
                        <td>$500</td>
                        <td className="pagos-td-edit"><i className="fas fa-edit"></i></td>
                        <td className="pagos-td-delete"><i className="fas fa-trash-alt"></i></td>
                    </tr>
                    </tbody>

                </table>

            </div>

        </div>
    )
}

export default Pagos;