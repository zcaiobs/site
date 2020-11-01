import React from 'react'
import '../styles/location.css'
import map from '../images/map.png'
import facebookImg from '../images/facebook.svg'
import instagramImg from '../images/instagram.svg'

const Location = (props) => {
    const local = 'https://www.google.com.br/maps/place/Suelier+-+Atelier+de+Costura/@-23.5463029,-46.6374864,17z/data=!4m5!3m4!1s0x94ce597ca98e4e69:0x855f628d7d0d99f7!8m2!3d-23.5462943!4d-46.6352954'

    return (
        <div className='location'>
            <div className="adress">
                <div>
                    <h1>Conheça nosso atelier</h1><br/>
                    <p>End.: Rua São Bento , 329, Sala 111</p>
                    <p>Atend.: Seg a Sex das 8h às 18h</p>
                    <p>Cel.: 11 96850-1077</p>
                    <p>E-mail: contato@suelier.com.br</p><br/>
                    <span>
                        <a href="https://www.facebook.com/suelieratelier"><img className='social-icon' src={facebookImg} alt="facebook"/></a>
                        <a href="https://www.instagram.com/sueliercostura"><img className='social-icon' src={instagramImg} alt="instagram"/></a>
                    </span>
                </div>
            </div> 
            <div className="map-div"><a href={local}><img className='map' src={map} alt="Map"/></a></div>
        </div>
    )
}

export default Location