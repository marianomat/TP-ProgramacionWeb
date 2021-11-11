import "./FormularioPacientes.css"
import  "../Horarios/Horarios.css";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {httpGet, httpPut} from "../../../utils/httpFunctions";
import {useAlert} from "react-alert";

function FormularioPacientes(props) {
    const alert = useAlert()
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
            alert.show('Turno modificado correctamente',{
                type: "success"
            })
        }).catch((err) => alert.show('No se pudo modificar, intente mas tarde!',{
            type: "error"
        }))

    }

    useEffect((ID) => getTurno(id), [])

    return (
        <div className="formpacientes-contenido">
            <h1 className="formpacientes-h1">Modificar turno</h1>
            <form className="center"  onSubmit={(e) => editTurno(e)}>
                <div className="formpacientes-input-grupo">
                        <label htmlFor="nombre">Nombre Paciente</label>
                    <input id="nombre" value={turno.patient_name ? turno.patient_name : "SIN PACIENTE"}
                           onChange={(e) => setTurno({...turno, patient_name:e.target.value})}/>
                </div>
                <div className="formpacientes-input-grupo">
                    <label htmlFor="apellido">Apellido Paciente</label>
                    <input id="apellido" value={turno.patient_lastName ? turno.patient_lastName : "SIN PACIENTE"}
                           onChange={(e) => setTurno({...turno, patient_lastName:e.target.value})}/>
                </div>
                <div className="formpacientes-input-grupo">
                    <label htmlFor="description">Celular</label>
                    <input id="description" value={turno.patient_phone ? turno.patient_phone : "SIN PACIENTE"}
                           onChange={(e) => setTurno({...turno, patient_phone:e.target.value})}/>
                </div>
                <div className="formpacientes-input-grupo">
                    <label htmlFor="description">Email</label>
                    <input id="description" value={turno.patient_email ? turno.patient_email : "SIN PACIENTE"}
                           onChange={(e) => setTurno({...turno, patient_email:e.target.value})}/>
                </div>
                <button type="submit">Modificar</button>
            </form>
        </div>
    )
}

export default FormularioPacientes;