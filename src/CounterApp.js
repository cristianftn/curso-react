
/*
#   EJERCICIO

1. Crear un nuevo componente dentro de la carpeta SRC llamado
    ```CounterApp```

2. El CounterApp debe de ser un __Functional Component__

3. El contenido del __CounterApp__ debe de ser:
    ```
        <h1>CounterApp</h1>
        <h2> { value } </h2>
    ```

4. Donde ```"value"``` es una propiedad enviada desde el padre hacia
    el componente __CounterApp__ (Debe ser númerica validada con PropTypes)

5. Reemplazar en el index.js el componente de <PrimeraApp />
    por el componente <CounterApp /> 
        (no se olviden del value que debe de ser un número)

6. Asegúrense de no tener errores ni warnings
    (Cualquier warning no usado, comentar el código)


*/



import React ,{ useState }from 'react';
import PropTypes from 'prop-types';



const CounterApp = ({ value }) => {

   
    
    const [contador, setContador] = useState( 0 ) 
   

    function aumentarContador(){

        setContador (contador + 1)
        
    }

    return(
    
        <>  
    
          <h1>CounterApp</h1>
          <h1>{contador}</h1>

          <button onClick={aumentarContador}>+1</button>

        </>
    
    )
    
    }
    
    
    /*OBLIGA A QUE LA PROP saludo sea un string, se puede hacer con todos los tipos,isRequired hace obligatoria el envio de esa propiedad, se puede no pones*/
    CounterApp.propTypes = {
        value: PropTypes.number.isRequired,
    }
    
    
    
    export default CounterApp;