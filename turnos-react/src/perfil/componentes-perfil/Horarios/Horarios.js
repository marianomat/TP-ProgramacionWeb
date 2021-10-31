import "./Horarios.css";
import DayPicker, {DateUtils} from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import {useState} from "react";

// Utilizamos la libreria react-day-picker para facilitar la seleccion de dias en qeu se habilitan turnos.
// Utiliza el State para determinar que dias son seleccionados.

// AGREGAR https://react-day-picker.js.org/examples/selected-multiple/
function Horarios() {
    const [selectedDays, setDay ] = useState({selectedDays: []}); // Generamos el estado para los dias seleccionados

    // Funcion que maneja los dias seleccionados en el estado
    // El primer parametro recibe un dia seleccionado, el segundo parametro es para eliminar la seleccion si se vuelve a presionar sobre el mismo dia
    function handleDayClick(day, { selected, disabled }) {
        if (disabled) {
            // Day is disabled, do nothing
            return;
        }
        console.log(selectedDays)
        const selectedDays2 = selectedDays.selectedDays;

        if (selected) {
            const selectedIndex = selectedDays2.findIndex(selectedDay =>
                DateUtils.isSameDay(selectedDay, day)
            );
            selectedDays2.splice(selectedIndex, 1);
        } else {
            selectedDays2.push(day);
        }
        setDay({ selectedDays: selectedDays2 })
    }

    return (
        <div className="horarios-contenido">
            <h2>Habilitar turnos</h2>
            <div className="horarios-contenido-items">
                <div className="contenido-calendario">
                    <DayPicker onDayClick={handleDayClick} selectedDays={selectedDays.selectedDays}  disabledDays={{ daysOfWeek: [0] }}/>
                </div>
                <div className="horarios-contenedor">
                    <h5>Seleccione la franja horaria</h5>
                    <form action="">
                        <div className="horarios-contenedor-desde">
                            <label htmlFor="horarios-desde-input">Desde</label>
                            <input
                                id='horarios-desde-input'
                                type='time'
                                className='form-control'
                                step="900"
                            />
                        </div>
                        <div className="contenedor-hasta">
                            <label htmlFor="horarios-hasta">Hasta</label>
                            <input
                                id='horarios-hasta-input'
                                type='time'
                                className='form-control'
                            />
                        </div>
                        <div className="contenedor-duracion">
                            <label htmlFor="horarios-duracion">Duracion turnos (en min)</label>
                            <input
                                id='horarios-duracion-input'
                                type='number'
                                className='form-control'
                            />
                        </div>
                        <button>Habilitar</button>
                    </form>

                </div>
            </div>
        </div>
    )

}

export default Horarios;