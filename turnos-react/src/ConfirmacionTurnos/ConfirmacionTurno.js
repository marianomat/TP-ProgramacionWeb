import {useEffect, useState} from "react";
import {httpGet, httpPost} from "../utils/httpFunctions";
import "./ConfirmarPago.css"
import {useParams} from "react-router-dom";
import {useAlert} from "react-alert";


//https://github.com/s4mukka/react-sdk-mercadopago
//https://gist.github.com/muZk/e11931b3df6aab7c7dd6dd53058c3e41


function ConfirmacionPago() {
    const alert = useAlert()
    const [preferenceId, setPreferenceId] = useState(null);
    const [turno, setTurno] = useState();
    const {turnoid} = useParams()

    const fetchTurnos = () => {
        ///No olvidar la barra al final de turnos
        httpGet("api/getturno/?turno_id=" + turnoid, false)
            .then((data) => {
                console.log(data)
                setTurno(data);
            }).catch((err) => {
                alert.show('Error obtenido los turnos, intente mas tarde!', {
                    type: "error"
                })
            }
        )
    }
    useEffect(fetchTurnos, []);

    useEffect(() => {
        // luego de montarse el componente, le pedimos al backend el preferenceId
        httpGet("api/generarlpreferencia/", false).then((order) => {
            console.log(order)
            setPreferenceId(order.id);
        });
    }, []);

    useEffect(() => {
        if (preferenceId) {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src =
                'https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js';
            script.setAttribute('data-preference-id', preferenceId);
            const form = document.querySelector(".botonpago");
            form.appendChild(script);
        }
    }, [preferenceId]);

    return (
        <div>
            <h1>Turno confirmado correctamente</h1>
            <h2>Datos del turno:</h2>
            <ul>
                <li>Doctor: {turno?turno.doctor.last_name + " " + turno.doctor.first_name :"Cargando"}</li>
                <li>Horario: {turno?turno.hour:"Cargando"}</li>
                <li>Nombre paciente: {turno?turno.patient_name:"Cargando"}</li>
                <li>Apellido paciente: {turno?turno.patientlastName:"Cargando"}</li>
                <li>Telefono paciente: {turno?turno.patient_phone:"Cargando"}</li>
            </ul>
            <h2>Puede abonar el turno haciendo click en pagar!</h2>
                <h4>Costo: {turno?turno.price:"Cargando"}</h4>
                <form className="botonpago" method="GET"></form>
        </div>
    )
}

export default ConfirmacionPago;