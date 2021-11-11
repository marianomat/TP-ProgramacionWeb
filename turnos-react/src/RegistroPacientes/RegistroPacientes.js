import React from "react";
import './RegistroPacientes.css'
import "../perfil/componentes-perfil/Turnos/Turnos.css";
import {httpGet, httpDelete, httpPut} from "../utils/httpFunctions";
import {useAlert} from "react-alert";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getToday} from "../utils/helpers";
import {Link} from "react-router-dom";

function RegistroPacientes(props) {
  const alert = useAlert()
  const [registropacientes, setTurnos] = useState([])
  const [turno, setTurno] = useState({})
  const [cantidadTurnos, setCantidadTurnos] = useState(0)
  const [id, setid] = useState()

  const fetchTurnos = () => {
    //No olvidar la barra al final de turnos
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
      httpPut("api/turnos/" + id + "/", turno).then((res) => {
          alert.show('Turno modificado correctamente',{
              type: "success"
          })
      }).catch((err) => alert.show(".",{
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
                        <option value= {true}>Pagado</option>
                        <option value= {false}>No pagado</option>
                    </select>
               </div>

               <div className="registropaciente-input-grupo">
                  <label for="fechaturno">Fecha de turnos disponibles</label>
                  <select name="Fecha" id='fechaturno' className="botons" value = {turno.hour}
                    onChange={(e) => setid(e.target.value)}>
                      {registropacientes.map(turno => {
                        return(
                          <option value= {turno.id}> {turno.hour} </option>
                        )   
                    })}
                    </select>
               </div>
                <button type="submit"> Enviar formulario </button>
              </form>

{/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

              <div className="turnos-contenido">
            <div className="turnos-contenido-tabla">
                <h2>Turnos</h2>
                {/*<div className="turnos-form-grupo">*/}
                {/*    <label htmlFor="fechas-turnos">Seleccionar Fecha</label>*/}
                {/*    <input id="fechas-turnos" type="date"/>*/}
                {/*</div>*/}
                {/*<h6>Turnos para el {today}</h6>*/}
                <table>
                    <thead>
                    <tr>
                        <th>Horario</th>
                        <th>Modificar</th>
                        <th>Eliminar</th>
                    </tr>
                    </thead>
                    <tbody>
                    {registropacientes.map(turno => {
                        return (
                            <tr key={turno.id}>
                                <td className="turnos-td-horario">{turno.horario}</td>
                                <td className="turnos-td-edit">
                                    <Link to={"/perfil/turnos/" + turno.id} test={"asd"}><i className="fas fa-edit"></i> </Link>
                                </td>
                                <td onClick={() => {handleDelete(turno.id)}} className="turnos-td-delete"><i className="fas fa-trash-alt"></i></td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </div>
            </div>
        </div>
    );
}

export default RegistroPacientes;