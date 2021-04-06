import React from 'react'

const PriceButtons = props => {

    const clickHandle = (data) => {

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
            <button className='off btn btn-primary' id='btn1' onClick={()=>clickHandle({identifier: 'btn1', price: 100, addTo: 'UI', item: 'Diseño de UI / UX'})}>Diseño de UI / UX</button>
            <button className='off btn btn-primary' id='btn2' onClick={()=>clickHandle({identifier: 'btn2', price: 2300, addTo: 'both', item: 'Login con Redes Sociales'})}>Login con Redes Sociales</button>
            <button className='off btn btn-primary' id='btn3' onClick={()=>clickHandle({identifier: 'btn3', price: 200, addTo: 'both', item: 'Integración con Whatsapp'})}>Integración con Whatsapp</button>
            <button className='off btn btn-primary' id='btn4' onClick={()=>clickHandle({identifier: 'btn4', price: 500, addTo: 'both', item: 'Registro de usuarios'})}>Registro de usuarios</button>
            <button className='off btn btn-primary' id='btn5' onClick={()=>clickHandle({identifier: 'btn5', price: 8700, addTo: 'both', item: 'Registro con Email'})}>Registro con Email</button> 
            <button className='off btn btn-primary' id='btn6' onClick={()=>clickHandle({identifier: 'btn6', price: 500, addTo: 'both', item: 'Aceptar Pagos'})}>Aceptar Pagos</button> 
            <button className='off btn btn-primary' id='btn7' onClick={()=>clickHandle({identifier: 'btn7', price: 3400, addTo: 'both', item: 'Google Maps'})}>Google Maps</button> 
            <button className='off btn btn-primary' id='btn8' onClick={()=>clickHandle({identifier: 'btn8', price: 2600, addTo: 'both', item: 'Mensajería on-Site'})}>Mensajería on-Site</button> 
            <button className='off btn btn-primary' id='btn9' onClick={()=>clickHandle({identifier: 'btn9', price: 900, addTo: 'both', item: 'Lista de Tareas'})}>Lista de Tareas</button> 
            <button className='off btn btn-primary' id='btn10' onClick={()=>clickHandle({identifier: 'btn10', price: 800, addTo: 'both', item: 'Administración de pagos'})}>Administración de pagos</button> 
            <button className='off btn btn-primary' id='btn11' onClick={()=>clickHandle({identifier: 'btn11', price: 700, addTo: 'both', item: 'Carrito de compras'})}>Carrito de compras</button> 
            <button className='off btn btn-primary' id='btn12' onClick={()=>clickHandle({identifier: 'btn12', price: 850, addTo: 'both', item: 'Perfiles de usuario'})}>Perfiles de usuario</button> 
            <button className='off btn btn-primary' id='btn13' onClick={()=>clickHandle({identifier: 'btn13', price: 20, addTo: 'both', item: 'Carga de archivos'})}>Carga de archivos</button>
            <button className='off btn btn-primary' id='btn14' onClick={()=>clickHandle({identifier: 'btn14', price: 280, addTo: 'both', item: 'Música / Video'})}>Música / Video</button> 
            <button className='off btn btn-primary' id='btn15' onClick={()=>clickHandle({identifier: 'btn15', price: 230, addTo: 'both', item: 'Galería de Fotos'})}>Galería de Fotos</button>  
            <button className='off btn btn-primary' id='btn16' onClick={()=>clickHandle({identifier: 'btn16', price: 2300, addTo: 'both', item: 'Búsquedas on-Site'})}>Búsquedas on-Site</button> 
            <button className='off btn btn-primary' id='btn17' onClick={()=>clickHandle({identifier: 'btn17', price: 220, addTo: 'both', item: 'Filtros de búsqueda'})}>Filtros de búsqueda</button> 
            <button className='off btn btn-primary' id='btn18' onClick={()=>clickHandle({identifier: 'btn18', price: 234, addTo: 'front', item: 'Adaptación Mobile'})}>Adaptación Mobile</button> 
            <button className='off btn btn-primary' id='btn19' onClick={()=>clickHandle({identifier: 'btn19', price: 235, addTo: 'both', item: 'Actualización en tiempo real'})}>Actualización en tiempo real</button> 
            <button className='off btn btn-primary' id='btn20' onClick={()=>clickHandle({identifier: 'btn20', price: 224, addTo: 'both', item: 'Administración de usuarios'})}>Administración de usuarios</button> 
            <button className='off btn btn-primary' id='btn21' onClick={()=>clickHandle({identifier: 'btn21', price: 2389, addTo: 'both', item: 'Integración de calendarios'})}>Integración de calendarios</button> 
            <button className='off btn btn-primary' id='btn22' onClick={()=>clickHandle({identifier: 'btn22', price: 546, addTo: 'both', item: 'Sistema de gestión'})}>Sistema de gestión</button> 
            <button className='off btn btn-primary' id='btn23' onClick={()=>clickHandle({identifier: 'btn23', price: 879, addTo: 'both', item: 'Sistema de reservas'})}>Sistema de reservas</button> 
            <button className='off btn btn-primary' id='btn24' onClick={()=>clickHandle({identifier: 'btn24', price: 354, addTo: 'both', item: 'Reportes diarios / semanal / mensual'})}>Reportes diarios / semanal / mensual</button> 
            <button className='off btn btn-primary' id='btn25' onClick={()=>clickHandle({identifier: 'btn25', price: 369, addTo: 'both', item: 'Revisión y mantenimiento'})}>Revisión y mantenimiento</button> 
        </React.Fragment>
    )
}

export default PriceButtons