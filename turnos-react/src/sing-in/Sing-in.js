import "./Sing-in.css"
function Singin () {
    return ( 
    <div className = "general">
        -
    <div class="center">
    <form class="center">
        <h1>Ingrese sus datos</h1>
        <div class="input-grupo">
            <label for="nombre">Nombre</label>
            <input id="nombre" placeholder="Nombre" />
        </div>
        <div class="input-grupo">
            <label for="apellido">Apellido </label>
            <input id="apellido" placeholder="Apellido" />
        </div>
        <div class="input-grupo">
            <label for="ciudad">Ciudad </label>
            <input id="ciudad" placeholder="Ciudad" />
        </div>
        <div class="input-grupo">
            <label for="direccion">Direccion </label>
            <input id="direccion" placeholder="Direccion" />
        </div>
        <div class="input-grupo">
            <label for="especialidad">Especialidad </label>
            <input id="especialidad" placeholder="Especialidad" />
        </div>
        <div class="input-grupo">
         <label for="E-mail">E-mail </label>
         <input id="E-mail" placeholder="E-mail" />
     </div>
        <div class="input-grupo">
            <label for="password">Contraseña </label>
            <input type="password" id="password" placeholder="Contraseña" />
        </div>
        <div class="input-grupo">
            <label for="imagen">Imagen </label>
            <input type="file" id="imagen" />
        </div>
        <a href="r-exitoso.html" class="botons">Registrarme</a>
    </form>
 </div>
 </div>

    )
}
export default Singin