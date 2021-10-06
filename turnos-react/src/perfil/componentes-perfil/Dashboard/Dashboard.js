import "./Dashboard.css"

function Dashboard() {
    return (
        <div className="dashboard-contenido">
            <div className="dashboard-contenido-header">
                <h3 className="dashboard-contenido-titulo">Bienvenido</h3>
                <a className="dashboard-contenido-pagina-a" href="#"><p className="dashboard-contenido-pagina">Ver pagina de turnos <i
                    className="fas fa-location-arrow"></i></p></a>
            </div>
            <div className="dashboard-contenido-info">
                <div id="dashboard-contenido-info-cuadro1" className="dashboard-contenido-info-cuadro">
                    <h6>Informacion global</h6>
                    <ul>
                        <li>Turnos pendientes: 34</li>
                        <li>Turnos libres: 34</li>
                        <li>Total pacientes: 34</li>
                        <li>Total turnos completados: 34</li>
                    </ul>
                </div>
                <div className="dashboard-contenido-info-cuadro">
                    <h6>Proximo turno</h6>
                    <ul>
                        <li>Fecha: 15/09/21</li>
                        <li>Hora: 15:00hs</li>
                        <li>Paciente: Roberto Carlos</li>
                        <li>Razón: consulta</li>
                    </ul>

                </div>
            </div>
            <div className="dashboard-contenido-grafico">



            </div>
        </div>
    )
}
export default Dashboard;