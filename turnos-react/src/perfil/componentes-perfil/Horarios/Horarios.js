import "./Horarios.css";



// AGREGAR https://react-day-picker.js.org/examples/selected-multiple/
function Horarios() {
    return (
        <div className="horarios-contenido">
            <h2>Habilitar turnos</h2>
            <div className="horarios-contenido-items">
                <div className="contenido-calendario">
                    <div
                        className='input-group'
                        id='multipleDate'
                        data-td-target-input='nearest'
                        data-td-target-toggle='nearest'
                    >
                        <input
                            id='multipleDateInput'
                            type='text'
                            className='form-control'
                            data-td-target='#multipleDate'
                            hidden
                        />
                        <span
                            className='input-group-text'
                            data-td-target='#multipleDate'
                            data-td-toggle='datetimepicker'
                        >
                    </span>
                    </div>
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
                        <button>Habilitar</button>
                    </form>

                </div>
            </div>
        </div>
    )

}

export default Horarios;