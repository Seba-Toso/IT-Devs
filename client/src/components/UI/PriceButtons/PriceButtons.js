import React from 'react'

const PriceButtons = props => {

    const clickHandle = (data) => {
        console.log('action in movement');
        let button = document.getElementById(data.identifier).getAttribute('class').split(' ')[0]

        if(button === 'off'){
            document.getElementById(data.identifier).setAttribute('class', 'on btn btn-primary')
            data.identifier = 'on'
        }else{
            document.getElementById(data.identifier).setAttribute('class', 'off btn btn-primary')
            data.identifier = 'off'
        }
        
        props.changePriceHandler(data)
    }

    return (
        <React.Fragment>
            <div className='off btn btn-primary' id='btn1' onClick={()=>clickHandle({identifier: 'btn1', price: 100, addTo: 'UI'})}>Diseño de UI / UX</div>
            <div className='off btn btn-primary' id='btn2' onClick={()=>clickHandle({identifier: 'btn2', price: 2300, addTo: 'both'})}>Login con Redes Sociales</div>
            <div className='off btn btn-primary' id='btn3' onClick={()=>clickHandle({identifier: 'btn3', price: 200, addTo: 'both'})}>Integración con Whatsapp</div>
            <div className='off btn btn-primary' id='btn4' onClick={()=>clickHandle({identifier: 'btn4', price: 500, addTo: 'both'})}>Registro de usuarios</div>
            <div className='off btn btn-primary' id='btn5' onClick={()=>clickHandle({identifier: 'btn5', price: 8700, addTo: 'both'})}>Registro con Email</div> 
            <div className='off btn btn-primary' id='btn6' onClick={()=>clickHandle({identifier: 'btn6', price: 500, addTo: 'both'})}>Aceptar Pagos</div> 
            <div className='off btn btn-primary' id='btn7' onClick={()=>clickHandle({identifier: 'btn7', price: 3400, addTo: 'both'})}>Google Maps</div> 
            <div className='off btn btn-primary' id='btn8' onClick={()=>clickHandle({identifier: 'btn8', price: 2600, addTo: 'both'})}>Mensajería on-Site</div> 
            <div className='off btn btn-primary' id='btn9' onClick={()=>clickHandle({identifier: 'btn9', price: 900, addTo: 'both'})}>Lista de Tareas</div> 
            <div className='off btn btn-primary' id='btn10' onClick={()=>clickHandle({identifier: 'btn10', price: 800, addTo: 'both'})}>Administración de pagos</div> 
            <div className='off btn btn-primary' id='btn11' onClick={()=>clickHandle({identifier: 'btn11', price: 700, addTo: 'both'})}>Carrito de compras</div> 
            <div className='off btn btn-primary' id='btn12' onClick={()=>clickHandle({identifier: 'btn12', price: 850, addTo: 'both'})}>Perfiles de usuario</div> 
            <div className='off btn btn-primary' id='btn13' onClick={()=>clickHandle({identifier: 'btn13', price: 20, addTo: 'both'})}>Carga de archivos</div>
            <div className='off btn btn-primary' id='btn14' onClick={()=>clickHandle({identifier: 'btn14', price: 280, addTo: 'both'})}>Música / Video</div> 
            <div className='off btn btn-primary' id='btn15' onClick={()=>clickHandle({identifier: 'btn15', price: 230, addTo: 'both'})}>Galería de Fotos</div>  
            <div className='off btn btn-primary' id='btn16' onClick={()=>clickHandle({identifier: 'btn16', price: 2300, addTo: 'both'})}>Búsquedas on-Site</div> 
            <div className='off btn btn-primary' id='btn17' onClick={()=>clickHandle({identifier: 'btn17', price: 220, addTo: 'both'})}>Filtros</div> 
            <div className='off btn btn-primary' id='btn18' onClick={()=>clickHandle({identifier: 'btn18', price: 234, addTo: 'front'})}>Adaptación Mobile</div> 
            <div className='off btn btn-primary' id='btn19' onClick={()=>clickHandle({identifier: 'btn19', price: 235, addTo: 'both'})}>Actualización en tiempo real</div> 
            <div className='off btn btn-primary' id='btn20' onClick={()=>clickHandle({identifier: 'btn20', price: 224, addTo: 'both'})}>Administración de usuarios</div> 
            <div className='off btn btn-primary' id='btn21' onClick={()=>clickHandle({identifier: 'btn21', price: 2389, addTo: 'both'})}>Integración de calendarios</div> 
            <div className='off btn btn-primary' id='btn22' onClick={()=>clickHandle({identifier: 'btn22', price: 546, addTo: 'both'})}>Sistema de gestión</div> 
            <div className='off btn btn-primary' id='btn23' onClick={()=>clickHandle({identifier: 'btn23', price: 879, addTo: 'both'})}>Reservas</div> 
            <div className='off btn btn-primary' id='btn24' onClick={()=>clickHandle({identifier: 'btn24', price: 354, addTo: 'both'})}>Reportes diarios / semanal / mensual</div> 
            <div className='off btn btn-primary' id='btn25' onClick={()=>clickHandle({identifier: 'btn25', price: 369, addTo: 'both'})}>Revisión y mantenimiento</div> 
        </React.Fragment>
    )
}

export default PriceButtons