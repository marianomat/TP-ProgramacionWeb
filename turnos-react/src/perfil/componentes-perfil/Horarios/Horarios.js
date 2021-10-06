import "./Horarios.css";

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
                            <label htmlFor="horarios-desde">Desde</label>
                            <div
                                className='input-group'
                                id='horarios-desde'
                                data-td-target-input='nearest'
                                data-td-target-toggle='nearest'
                            >
                                <input
                                    id='horarios-desde-input'
                                    type='text'
                                    className='form-control'
                                    data-td-target='#horarios-desde'
                                />
                                <span
                                    className='input-group-text'
                                    data-td-target='#horarios-desde'
                                    data-td-toggle='datetimepicker'
                                >
                                 <span className='fas fa-clock'></span>
                                 </span>
                            </div>
                        </div>
                        <div className="contenedor-hasta">
                            <label htmlFor="horarios-hasta">Hasta</label>
                            <div
                                className='input-group'
                                id='horarios-hasta'
                                data-td-target-input='nearest'
                                data-td-target-toggle='nearest'
                            >
                                <input
                                    id='horarios-hasta-input'
                                    type='text'
                                    className='form-control'
                                    data-td-target='#horarios-hasta'
                                />
                                <span
                                    className='input-group-text'
                                    data-td-target='#horarios-hasta'
                                    data-td-toggle='datetimepicker'
                                >
                                 <span className='fas fa-clock'></span>
                                 </span>
                            </div>

                        </div>
                        <button>Habilitar</button>
                    </form>

                </div>
            </div>
        </div>
    )

}

export default Horarios;