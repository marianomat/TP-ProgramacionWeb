import './App.css';
import React from "react";

const RegistroPacientes = () => {
    return (
                <React.Fragment>
                <title>Página Turnos</title>
                <div>
                  <h1 className="custom_title center">
                    REGISTRO DE TURNOS
                  </h1>
                </div>
                <div>
                  <h2  class="tit">
                    Complete el siguiente formulario
                  </h2>
                  <form class="tit">
                    <div class="input-grupo">
                      <label for="name">Nombre:</label> 
                      <input type="text" id="name" name="user_name"/>
                    </div>
                    <div class="input-grupo">   
                      <label for="lastname">Apellido:</label>
                      <input type="text" id="lastname" lastname="user_lastname"/>
                    </div>
                    <div class="input-grupo">  
                      <label for="number">Número celular:</label>
                      <input type="text" id="number" number="user_number"/>
                    </div>
                    <div class="input-grupo">  
                      <label for="mail">Correo electrónico:</label>
                      <input type="email" id="mail" name="user_mail"/>
                    </div>
                    <button type="submit"> Enviar formulario </button>
                  </form>
                </div>
                </React.Fragment>
            
                );
}

export default RegistroPacientes;