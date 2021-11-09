import React from "react";
import './RegistroPacientes.css'
const RegistroPacientes = () => {
    return (
        <div className="registropaciente-contenedor">
            <title>Página Turnos</title>
            <div>
              <h1 className="registropaciente-custom_title registropaciente-center">
                REGISTRO DE TURNOS
              </h1>
            </div>
            <div>
              <h2  class="registropaciente-tit">
                Complete el siguiente formulario
              </h2>
              <form class="registropaciente-tit">
                <div class="registropaciente-input-grupo">
                  <label for="name">Nombre:</label>
                  <input type="text" id="name" name="user_name"/>
                </div>
                <div class="registropaciente-input-grupo">
                  <label for="lastname">Apellido:</label>
                  <input type="text" id="lastname" lastname="user_lastname"/>
                </div>
                <div class="registropaciente-input-grupo">
                  <label for="number">Número celular:</label>
                  <input type="text" id="number" number="user_number"/>
                </div>
                <div class="registropaciente-input-grupo">
                  <label for="mail">Correo electrónico:</label>
                  <input type="email" id="mail" name="user_mail"/>
                </div>
                <button type="submit"> Enviar formulario </button>
              </form>
            </div>
        </div>
    );
}

export default RegistroPacientes;