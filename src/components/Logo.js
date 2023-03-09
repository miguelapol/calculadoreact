import React from "react";
import freeCodeCampLogo from '../images/freecodecamp-logo.png';
function Logo() {
    return(
        <div className='freecodecamp-logo-contenedor'>
        <img src={freeCodeCampLogo} className='freecodecamp-logo' alt='logo de freCodeCamp' />
      </div>
    );
    
}
export default Logo;