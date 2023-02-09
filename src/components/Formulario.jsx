import React, { Fragment, useState } from "react";

import shortid from "shortid";
import PropTypes from 'prop-types';



const Formulario = ({crearCita}) => {



// Crear State de Citas 

const [citas, actualizarCita] = useState({


     mascota : '',
     propietario: '',
     fecha: '',
     hora:'',
     sintomas:''
});

const [error , actualizarError] = useState(false);

// Funcion que se ejecuta cada vez que un usuario escriba en el input

const actualizarState = e => {
    actualizarCita ({
        ...citas,
        [e.target.name]: e.target.value

    });

}
 // Extrar los valores 

 const {mascota, propietario,fecha,hora,sintomas} = citas;


 // Cuando el usuario apreta el boton agregar

 const submitCita = e=>{  // Se agrega todo el contenido antes de ser enviada la información.
    e.preventDefault(); // Funcion para errores

    // Validar 

    if (mascota.trim() === '' ||propietario.trim() === '' ||fecha.trim() === '' ||hora.trim() === ''||sintomas.trim() === ''){
        actualizarError(true)
         
        return;
    }
    // ELiminar el mensaje previo 

    actualizarError(false);
    //Asignar id/key
    citas.id = shortid();  // Se instala npm i uuid, luego se importa y genera id. 

    // console.log(citas.id) // Válidar si se conectaron los componentes. 
    //Crear Cita 
    crearCita(citas); // Acá se añade la cita dentro del usesState de App.js. 

    //Reiniciar Form
    
    actualizarCita({
        mascota : '',
        propietario: '',
        fecha: '',
        hora:'',
        sintomas:''

    })
 }

return ( 


<Fragment>

    <h2> Agendar Citas </h2>
    
    {error ? <p className="alerta-error"> Todo los campos son obligatorios</p> : null}

    <form onSubmit={submitCita}>
    <label > Nombre Mascota</label>
    <input
        type="text"
        name="mascota"
        className="u-full-width" 
        placeholder="nombre mascota"      
        onChange={actualizarState} 
        value={mascota}
    
    />
    <label > Nombre dueño</label>
    <input
        type="text"
        name="propietario"
        className="u-full-width" 
        placeholder="nombre dueño"   
        onChange={actualizarState}     
        value={propietario}
    
    />
    <label >Fecha</label>
    <input
        type="date"
        name="fecha"
        className="u-full-width" 
        onChange={actualizarState}     
        value={fecha}   
    />
    <label >Hora</label>
    <input
        type="time"
        name="hora"
        className="u-full-width"     
        onChange={actualizarState}  
        value={hora}
    
    />
    <label > Sítomas</label>
    <textarea name="sintomas" 
    className="u-full-width"  
    onChange={actualizarState}
    value={sintomas}  >



    </textarea>
    
    <button 
        type="submit"
        className="u-full-width button-primary"
    > 
        Agregar Cita
    </button>


    </form>
    
    
    
    
    
</Fragment>
)

}
Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario;