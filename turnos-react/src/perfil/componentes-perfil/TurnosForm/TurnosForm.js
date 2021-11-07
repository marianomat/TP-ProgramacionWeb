import "./TurnosForm.css"
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {httpGet, httpPut} from "../../../utils/httpFunctions";

function TurnosForm(props) {
    const {id} = useParams()
    const [turno, setTurno] = useState({})

    const getTurno = (id) => {
        httpGet("api/turnos/" + id).then((res) => {
            setTurno(res)
        }).catch((err) => window.alert(err))
    }

    const editTurno = (e) => {
        e.preventDefault()
        httpPut("api/turnos/" + id + "/", turno).then((res) => {
            window.alert("UPDATED")
        }).catch((err) => window.alert(err))

    }

    useEffect(() => getTurno(id), [])

    return (
        <div className="datosform-contenido">
            <h1 className="datosform-h1">Modificar turno</h1>
            <form className="center"  onSubmit={(e) => editTurno(e)}>
                <div className="datosform-input-grupo">
                        <label htmlFor="nombre">Nombre Paciente</label>
                    <input id="nombre" value={turno.patient_name ? turno.patient_name : "SIN PACIENTE"}
                           onChange={(e) => setTurno({...turno, patient_name:e.target.value})}/>
                </div>
                <div className="datosform-input-grupo">
                    <label htmlFor="apellido">Apellido Paciente</label>
                    <input id="apellido" value={turno.patient_lastName ? turno.patient_lastName : "SIN PACIENTE"}
                           onChange={(e) => setTurno({...turno, patient_lastName:e.target.value})}/>
                </div>
                <div className="datosform-input-grupo">
                    <label htmlFor="description">Descripcion </label>
                    <input id="description" value={turno.description ? turno.description : "SIN PACIENTE"}
                           onChange={(e) => setTurno({...turno, description:e.target.value})}/>
                </div>
                <button type="submit">Modificar</button>
            </form>
        </div>
    )
}

export default TurnosForm;