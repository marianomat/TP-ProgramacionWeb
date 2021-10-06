import "./DatosForm.css"

function DatosForm() {
    return (
        <div className="datosform-contenido">
            <h1 className="datosform-h1">Modificar datos</h1>
            <form className="center">
                <div className="datosform-input-grupo">
                    <label htmlFor="nombre">Nombre</label>
                    <input id="nombre" value="Carlos"/>
                </div>
                <div className="datosform-input-grupo">
                    <label htmlFor="apellido">Apellido </label>
                    <input id="apellido" value="Perez"/>
                </div>
                <div className="datosform-input-grupo">
                    <label htmlFor="ciudad">Ciudad </label>
                    <input id="ciudad" value="Rosario"/>
                </div>
                <div className="datosform-input-grupo">
                    <label htmlFor="direccion">Direccion </label>
                    <input id="direccion" value="Urquiza 1234"/>
                </div>
                <div className="datosform-input-grupo">
                    <label htmlFor="especialidad">Especialidad </label>
                    <input id="especialidad" value="Psicologo"/>
                </div>
                <div className="datosform-input-grupo">
                    <label htmlFor="password">Contraseña </label>
                    <input type="password" id="password" placeholder="Contraseña"/>
                </div>
                <div className="datosform-input-grupo">
                    <label htmlFor="imagen">Imagen </label>
                    <input type="file" id="imagen"/>
                </div>
                <button>Modificar</button>
            </form>
        </div>
    )
}

export default DatosForm;