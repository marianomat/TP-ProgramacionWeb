import "./Dashboard.css"
import {useEffect, useState} from "react";
import {httpGet} from "../../../utils/httpFunctions";
import {useAlert} from "react-alert";

function Dashboard() {
    const alert = useAlert()
    const [proximoTurno, setProximoTurno] = useState(null)
    const [turnos, setTurnos] = useState([])

    const getTurno = () => {
        httpGet("api/turnos/").then((res) => {
            setProximoTurno(res[0])
            setTurnos(res)
        }).catch(err => {
            alert.show('No se puede obtener información de los turnos',{
                type: "error"
            })
        })
    }

    const getTurnoState = () => {
        let pending = 0;
        let taken = 0;
        let isPayed = 0;
        for(let turno of turnos) {
            turno.is_taken ? taken++ : pending++;
            turno.is_payed ? isPayed++ : console.log("asd");
        }
        return {
            pending: pending,
            taken: taken,
            total: taken + pending,
            isPayed: isPayed
        }
    }

    useEffect(getTurno, [])
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
                        <li>Turnos confirmados: {getTurnoState().taken}</li>
                        <li>Turnos libres: {getTurnoState().pending}</li>
                        <li>Turnos habilitados: {getTurnoState().total}</li>
                        <li>Turnos pagos: {getTurnoState().isPayed}</li>
                    </ul>
                </div>
                <div className="dashboard-contenido-info-cuadro">
                    <h6>Proximo turno</h6>
                    <ul>
                        <li>Fecha: {proximoTurno ? proximoTurno.hour.split("T")[0] : "Esperando datos.."}</li>
                        <li>Hora: {proximoTurno ? proximoTurno.hour.split("T")[1].slice(0,-1) : "Esperando datos.."}</li>
                        <li>Paciente: {proximoTurno ? proximoTurno.first_name + " " + proximoTurno.lastName : "Esperando datos.."}</li>
                        <li>Razón: {proximoTurno ? proximoTurno.description : "Esperando datos.."}</li>
                    </ul>
                </div>
            </div>
            {/*<div className="dashboard-contenido-grafico">*/}
            {/*</div>*/}
        </div>
    )
}
export default Dashboard;