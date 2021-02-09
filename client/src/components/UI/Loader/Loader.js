import React from 'react';
import './Loader.css';




const Loader = () => {
    window.addEventListener("load", function () {
        this.document.getElementById("loader").classList.toggle("loader2")
    })
  
    return (
        <div>
            <div class="lds-hourglass loader" id="loader">
                <h1>PREPARANDO TODO PARA TU MEJOR EXPERIENCIA...</h1>
            </div>
        </div>

    );
}

export default Loader;

