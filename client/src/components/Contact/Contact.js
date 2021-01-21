import React, {useState} from 'react'
import './Contact.css'

const Contact = props => {
    
    const [contactData, setContactData] = useState('')
    const [isValid, setIsValid] = useState(true)
    //Poner validaciones acá


    //Handler
    const NameInputHandler = (event) => {
        console.log(event.target.value);
        setContactData(event.target.value)
    }

    const inputHandler = (event) => {
        console.log(event.target.value);
        setContactData(event.target.value)
    }

    const handleSubmit = () => {
        console.log('Form submited');
    }

    return (
        <div className='ContactContainer' >
            <form onSubmit={handleSubmit} className='Form'>
                <label className='Label'>
                Full Name
                    { !isValid && <span className='notValidMessage'> This field is not valid.</span>}
                </label>
                <input type='text' placeholder='Name' onChange={NameInputHandler} className={`Input`} />
                <label className='Label'>
                    E-Mail
                </label>
                <input type='email' placeholder='Mail' onChange={inputHandler} className='Input' />
                <label className='Label'>
                    Phone Number
                </label>
                <input type='numeric' placeholder='Phone' onChange={inputHandler} className='Input' />
                <label className='Label'>
                    Let us know your problems
                </label>
                <textarea type='text' placeholder='Message' onChange={inputHandler} className='Input Message' />
                <input type="submit" value="Submit" className='Submit' />
            </form>
            <div className='ContactImage'>
            </div>
        </div>
    )
}


export default Contact;