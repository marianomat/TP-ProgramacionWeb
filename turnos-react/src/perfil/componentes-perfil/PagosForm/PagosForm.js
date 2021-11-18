import "./TurnosForm.css"
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {httpGet, httpPut} from "../../../utils/httpFunctions";
import {useAlert} from "react-alert";
import {useHistory} from "react-router-dom"

function PagosForm(props) {
    const alert = useAlert()
    const {id} = useParams()
    const [pago, setPago] = useState({})
    let history = useHistory();

    const getPago = (id) => {
        httpGet("api/pagos/" + id).then((res) => {
            setPago(res)
        }).catch((err) => window.alert(err))
    }

    const editPago = (e) => {
        e.preventDefault()
        httpPut("api/pagos/" + id + "/", pago).then((res) => {
            history.push('/perfil/pagos')
            alert.show('Pago modificado correctamente',{
                type: "success"
            })
        }).catch((err) => alert.show('No se pudo modificar, intente mas tarde!',{
            type: "error"
        }))

    }

    useEffect((ID) => getPago(id), [])

    return (
        <div className="pagosform-contenido">
            <h1 className="pagosform-h1">Modificar turno</h1>
            <form className="center"  onSubmit={(e) => editPago(e)}>
                <div className="pagosform-input-grupo">
                    <label htmlFor="nombre">Monto</label>
                    <input id="pagos-monto" value={pago.monto || "SIN PACIENTE"}
                           onChange={(e) => setPago({...pago, monto:e.target.value})}/>
                </div>
                <div className="datosform-input-grupo">
                    <label htmlFor="apellido">Apellido Paciente</label>
                    <input id="apellido" value={turno.patient_lastName ? turno.patient_lastName : "SIN PACIENTE"}
                           onChange={(e) => setTurno({...turno, patient_lastName:e.target.value})}/>
                </div>
                <div className="datosform-input-grupo">
                    <label htmlFor="description">Descripcion </label>
                    <input id="description" value={turno.description ? turno.description : "SIN PACIENTE"}
                           onChange={(e) => setPago({...pago, description:e.target.value})}/>
                </div>
                <button type="submit">Modificar</button>
            </form>
        </div>
    )
}

export default PagosForm;