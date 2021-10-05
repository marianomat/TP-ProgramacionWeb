

import "./Login.css"

 function Login(){
    return (
        
        <div className="general">
            -
            
 
     <div className="center">
        <form className="center">
            <h1>Ingrese sus datos</h1>
            <div className="input-grupo">
                <label for="E-mail">E-mail</label>
                <input id="E-mail" placeholder="E-mai" />
            </div>
        
            <div className="input-grupo">
                <label for="password">Contraseña </label>
                <input type="password" id="password" placeholder="Contraseña" />
            </div>
            
            
            <a href="Perfil" className="botons">Iniciar sesion</a>
            </form>

            <div className="register">
            <p>Si aun no se ha registrado</p>
            <a href="Singin"> Registrese aqui</a></div>
            </div>

        
        </div>
        
        
    
    )
}
export default Login