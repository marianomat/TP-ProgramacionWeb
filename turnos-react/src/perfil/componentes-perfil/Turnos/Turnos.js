import "./Turnos.css";
import {useEffect, useState} from "react";
import axios from "axios";
import {httpGet} from "../../../utils/httpFunctions";
import {getToday} from "../../../utils/helpers";

function Turnos() {

    const [turnos, setTurnos] = useState([]);
    const [diaSeleccionado, setDiaSeleccionado] = useState(getToday())
    const fetchTurnos = () => {
        //No olvidar la barra al final de turnos
        httpGet("api/turnos/")
            .then((data) => {
                data[0].horario = new Date(data[0].hour).toLocaleDateString() + " "
                data[0].horario += new Date(data[0].hour).toLocaleTimeString() + " hs"
                setTurnos(data)
            });
    }
    //UseEffect tiene dos argumentos, el primero una funcion (referencia, no el valro de retorno) que se ejecuta
    //El segundo es un array de dependencais, que son variables que React observa y cuando cambie alguna de ellas
    //va a ejecutarse la primer funcion.
    //Si pasamos un array vacio para que solamente se corra al principio
    // Si no ponemos nada , cada cambio que se produzca en el componente se corre la funcion (costoso)
    useEffect(fetchTurnos, []);
    return (
        <div className="turnos-contenido">
            <div className="turnos-contenido-tabla">
                <h2>Turnos</h2>
                {/*HACER ESTO SI QUEDA TIEMPO*/}
                {/*<div className="turnos-form-grupo">*/}
                {/*    <label htmlFor="fechas-turnos">Seleccionar Fecha</label>*/}
                {/*    <input id="fechas-turnos" type="date"/>*/}
                {/*</div>*/}
                {/*<h6>Turnos para el {today}</h6>*/}
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
                    {turnos.map(turno => {
                        return (
                            <tr>
                                <td className="turnos-td-horario">{turno.horario}</td>
                                <td>{turno.patient_name + " " + turno.patient_lastName}</td>
                                <td>{turno.description}</td>
                                <td>{turno.is_payed ? "SI" : "NO"}</td>
                                <td className="turnos-td-edit"><i className="fas fa-edit"></i></td>
                                <td className="turnos-td-delete"><i className="fas fa-trash-alt"></i></td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Turnos;