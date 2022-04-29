import React from 'react';
import PropTypes from 'prop-types';

const PrimerApp = ({ saludo, subtitulo = 'soy un subtitulo' }) => {

/*if(!saludo){
    throw new Error('El saludo es necesario')
}*/

return(

    <>  

      <h1>{saludo}</h1>
      <h1>{subtitulo}</h1>
    </>

)

}


/*OBLIGA A QUE LA PROP saludo sea un string, se puede hacer con todos los tipos,isRequired hace obligatoria el envio de esa propiedad, se puede no pones*/
PrimerApp.propTypes = {
    saludo: PropTypes.string.isRequired,
}



export default PrimerApp;