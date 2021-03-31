import React, { useState, useReducer, useCallback } from 'react';
import { db } from '../context/firebase';
import swal from 'sweetalert';
import PriceButtons from '../components/UI/PriceButtons/PriceButtons';

import './Css/Estimate.css';

// ---- REDUCER ----
// actions
const PRICE_UPDATE = 'PRICE_UPDATE';
const calculatePriceReducer = (state, action) => {
  if (action.type === PRICE_UPDATE) {
    let totalPrice = state.totalPrice;
    let backendPrice = state.backendPrice;
    let frontendPrice = state.frontendPrice;
    let userInterfacePrice = state.userInterfacePrice;
    if (action.addTo === 'both') {
      const updatedBackendPrice = backendPrice + action.price;
      const updatedFrontendPrice = frontendPrice + action.price;
      const updatedPrice =
        totalPrice + action.price + action.price + userInterfacePrice;
      return {
        ...state,
        backendPrice: updatedBackendPrice,
        frontendPrice: updatedFrontendPrice,
        totalPrice: updatedPrice,
      };
    }
    if (action.addTo === 'UI') {
      const updatedUserInterfacePrice = userInterfacePrice + action.price;
      const updatedPrice = totalPrice + action.price;
      return {
        ...state,
        userInterfacePrice: updatedUserInterfacePrice,
        totalPrice: updatedPrice,
      };
    }
    
    
  }
  return state;
};

// ---- PRINCIPAL COMPONENT -----
const Estimate = () => {
  // ---- REDUCER INITIAL CONFIGURATION ---
  const [estimatorPriceState, dispatchEstimatorPriceState] = useReducer(
    calculatePriceReducer,
    {
      totalPrice: 4000,
      backendPrice: 0,
      frontendPrice: 0,
      userInterfacePrice: 0,
    }
    
  );
  const ttlDb = estimatorPriceState.totalPrice;

  
  const changePriceHandler = useCallback(
    ({ identifier, price, addTo }) => {
      if (identifier === 'off') {
        dispatchEstimatorPriceState({
          type: 'PRICE_UPDATE',
          price: 0 - price,
          addTo,
        });
      } else {
        dispatchEstimatorPriceState({
          type: 'PRICE_UPDATE',
          price,
          addTo,
        });
      }
    },
    [dispatchEstimatorPriceState]
  );
  


  // ---- ENVÍO DE FORMULARIO ----
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
    // eslint-disable-next-line
  const [price, setPrice] = useState(0);
  // eslint-disable-next-line
  const [loader, setLoader] = useState(true);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    

    db.collection('Estimate')
      .add({
        name: name,
        email: email,
        phone: phone,
        price: ttlDb,
      })
      .then(() => {
        swal({
          title: 'Tu mensaje fue enviado con Exito!',
          text: 'Te contactaremos a la brevedad',
          icon: 'success',
        });
        setLoader(false);
      })
      .catch((err) => {
        alert(err.message);
        setLoader(false);
      });
    setName('');
    setEmail('');
    setPhone('');
    setPrice('');
  };

  function estimateCost() {
    return (
      <div>
      <div className="section intro">
        <div className="sloganContainer">
          <h1 className="sloganText One">CALCULA</h1>
          <h1 className="sloganText Two">EL COSTO</h1>
          <h1 className="sloganText Three">DE TU IDEA.</h1>
        </div>
      </div>
      <div className="section estimate">
        <div className="buttonsContainer">
          <div className="estimatorDetails">
            <h3 className="detailTitle">
              Calculá cuánto podría llegar a costarte.
            </h3>
            <p className="detailText">
              Te facilitamos esta manera de hacerte una primera idea de cuánto
              puede llegar a costarte realizar ese proyecto que soñas. Tené en
              cuenta que para cerrar un costo final será necesaria una reunión,
              por lo que si estás interesado/a podés solicitar un encuentro al
              final de esta sección.
            </p>
          </div>
          <PriceButtons changePriceHandler={changePriceHandler} />
        </div>
        <div className="totalContainer">
          <div className="totalSection">
            <h6 className="totalTitle">Total Estimado</h6>
            <h3 id="totalPrice">${estimatorPriceState.totalPrice }</h3>
            <div className="totalDetails">
              <p className="detailName">BackEnd</p>
              <p className="detailPrice">${estimatorPriceState.backendPrice}</p>
              <p className="detailName">FrontEnd</p>
              <p className="detailPrice">
                ${estimatorPriceState.frontendPrice}
              </p>
              <p className="detailName">Diseño de UI</p>
              <p className="detailPrice">
                ${estimatorPriceState.userInterfacePrice}
              </p>
            </div>
            <form onSubmit={handleSubmit} className="estimatorForm">
              <input
                type="text"
                placeholder="Nombre"
                onChange={(e) => setName( e.target.value )}
                className="estimatorInput"
                value={name}
                id="user"
                required
              />
              <input
                type="email"
                placeholder="Mail"
                onChange={(e) => setEmail( e.target.value )}
                className="estimatorInput"
                value={email}
                required
              />
              <input
                type="numeric"
                placeholder="Teléfono"
                onChange={(e) => setPhone( e.target.value )}
                className="estimatorInput"
                value={phone}
                required    
              />
               <button className="Submit" type="submit" id="estimateBtn">
                Enviar
               </button>
            </form>      
          </div>
        </div>
      </div>
    </div>
    )
  }

  return (
    <div>{ estimateCost() }</div>
  );
};

export default Estimate;