import React, { Fragment,useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita"

function App(){




    // Citas local Storage 


    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    if(!citasIniciales ){ 
        citasIniciales = [];
    }

// Arreglo de citas 

const [citas, guardarCitas] = useState(citasIniciales);


// Funcion que tome las citas actuales y agregue la nueva

const crearCita = cita => {
guardarCitas([
    ...citas ,
    cita

]);


}

//Use Effect para realizar ciertas operaciones cuando el state cambia  // Siempre son funciones flecha 

useEffect( ()=> {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));

if(citasIniciales){

    localStorage.setItem('citas', JSON.stringify(citas))

}   else   {
    localStorage.setItem('citas',JSON.stringify([]));
}



}, [citas]);

// Funcion que elimina cita

const eliminarCita = id =>{

    const nuevasCitas =citas.filter(cita => cita.id !== id) // se usa el diferente, porque el filter al traerte los datos iguales a la id, 
                                                            //en este caso te trae los que no son iguales y los elimina
    guardarCitas(nuevasCitas);

}

// mensaje Condicional

const titulo = citas.length=== 0 ? 'No hay citas' : 'Administra tus citas' // El titulo de forma reactiva 

    return(
<Fragment>
    
    <h1>Administracion de pacientes</h1>
        <div className="container">

            <div className="row">

                <div className="one-half column">
             
        <Formulario 
            crearCita={crearCita}
        />

                </div>
                
                <div className="one-half column">
                    <h2> {titulo} </h2>
                    {citas.map(cita => ( <Cita
                    key={cita.id}
                    cita={cita}
                    eliminarCita={eliminarCita}
                    
                    
                    />))}

                </div>
            </div>
        </div>

</Fragment>

    )
}

export default App;