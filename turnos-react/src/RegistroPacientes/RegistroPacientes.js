import React from "react";
import './RegistroPacientes.css'
import "../perfil/componentes-perfil/Turnos/Turnos.css";
import {httpGet, httpDelete, httpPut, httpPatch, httpPost} from "../utils/httpFunctions";
import {useAlert} from "react-alert";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getToday} from "../utils/helpers";
import {Link} from "react-router-dom";

function RegistroPacientes(props) {
  const alert = useAlert()
  const [registropacientes, setTurnos] = useState([])
  const [turno, setTurno] = useState({})
  const [pago, setPago] = useState({})
  const [cantidadTurnos, setCantidadTurnos] = useState(0)
  const [id, setid] = useState()
 /*  const [turnoseleccionado, setTurnoSeleccionado] = useState ({}) */
function optionpago() {
  let turnoselec = ""
    for (let i in turno){
      if (i.id == id){
        turnoselec = i
      }
    }
    if (turnoselec != "" && turnoselec.is_payed == false)
    { return (
      <div>
        <div className="registropaciente-input-grupo">
          <label for="monto">Monto:</label>
          <input id="monto" value={pago.monto ? pago.monto : ""} placeholder="$"
                  onChange={(e) => setPago({...pago, monto:e.target.value})}/>
          </div>

          <div className="registropaciente-input-grupo">
          <label for="codigopago">Codigo Pago</label>
          <input id="codigopago" value={pago.payment_code ? pago.payment_code: ""} placeholder="- - - -"
                  onChange={(e) => setPago({...pago, payment_code:e.target.value})}/>
          </div>
      </div>
    )}

  
}
  const fetchTurnos = () => {
    ///No olvidar la barra al final de turnos
    httpGet("api/turnos/")
        .then((data) => {
            for(let day of data) {
                day.horario = new Date(day.hour).toLocaleDateString() + " "
                day.horario += new Date(day.hour).toLocaleTimeString() + " hs"
            }
            setTurnos(data)
            setCantidadTurnos(data.length)
        }).catch((err) => {
            alert.show('Error obtenido los turnos, intente mas tarde!',{
                type: "error"
            })
        }
    )
  }

  const editTurno = (e) => {
    e.preventDefault()
    console.log(turno)
    httpPatch("api/turnos/" + id + "/", turno).then((res) => {
        alert.show('Turno modificado correctamente',{
            type: "success"
        })
    }).catch((err) => alert.show("Error",{
        type: "error"
    }))
    httpPost("api/pagos/").then((res) => {
      alert.show('Pago modificado correctamente',{
          type: "success"
      })
      }).catch((err) => alert.show("Error",{
        type: "error"
    }))
}
  const handleDelete = (id) => {
    httpDelete("api/turnos/" + id)
        .then((res) => alert.show('Eliminado correctamente!',{
            type: "success"
        }))
        .catch(err => alert.show('No se pudo eliminar, intente mas tarde!',{
            type: "error"
        }))
}

  useEffect(fetchTurnos,[]);
    return (
        <div className="registropaciente-contenedor">
            <title>Página Turnos</title>
            <div>
              <h1 className="registropaciente-custom_title registropaciente-center">
                REGISTRO DE TURNOS
              </h1>
            </div>
            <div>
              <h2  className="registropaciente-tit">
                Complete el siguiente formulario
              </h2>
              <form className="registropaciente-tit" onSubmit ={(e) => editTurno(e)} >
                <div className="registropaciente-input-grupo">
                  <label for="nombre">Nombre:</label>
                  <input id="nombre" value={turno.patient_name ? turno.patient_name : ""} placeholder="Nombre"
                           onChange={(e) => setTurno({...turno, patient_name:e.target.value})}/>
                </div>
                <div className="registropaciente-input-grupo">
                  <label for="apellido">Apellido:</label>
                  <input id="apellido" value={turno.patient_lastName ? turno.patient_lastName : ""} placeholder="Apellido"
                           onChange={(e) => setTurno({...turno, patient_lastName:e.target.value})}/>
                </div>
                <div className="registropaciente-input-grupo">
                  <label for="numero">Número celular:</label>
                  <input id="numero" value={turno.patient_phone ? turno.patient_phone : ""} placeholder="Numero"
                           onChange={(e) => setTurno({...turno, patient_phone:e.target.value})}/>
                </div>
                <div className="registropaciente-input-grupo">
                  <label for="email">Correo electrónico:</label>
                  <input id="email" value={turno.patient_email ? turno.patient_email : ""} placeholder="Mail"
                           onChange={(e) => setTurno({...turno, patient_email:e.target.value})}/>
                </div>

                <div className="registropaciente-input-grupo">
                  <label for="pagoturno">Pago de turno</label>
                    <select name="Pago" id='pagoturno' className="botons" value = {turno.is_payed}
                      onChange={(e) => setTurno({...turno, is_payed:e.target.value})}> 
                      {/* /* onChange={optionpago}> */}
                        <option value= {true}>Pagado</option>
                        <option value= {false}>No pagado</option>
                    </select>    
                    {
                      optionpago ()
                    } 
               </div>
               
               <div className="registropaciente-input-grupo">
                  <label for="fechaturno">Fecha de turnos disponibles</label>
                  <select name="Fecha" id='fechaturno' className="botons" value = {turno.hour}
                    onChange={(e) => setid(e.target.value)}>
                      {registropacientes.map(turno => {
                        return(
                          <option value= {turno.id}> {turno.horario} </option>
                        )   
                    })}
                    </select>
               </div>
                <button type="submit"> Enviar formulario </button>
              </form>
            </div>
        </div>
    );
}

export default RegistroPacientes;