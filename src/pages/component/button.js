import React from 'react'
import '../styles/button.css'



const Button = (props) => {

    const whatsapp = () => {
        window.location.href = 'https://api.whatsapp.com/send?phone=5511968501077&text=&source=&data=&app_absent='
    }

    return (
        <div className='btn-div'>
            <button className='btn' onClick={whatsapp}>{props.text}</button>
        </div>
    )
}

export default Button