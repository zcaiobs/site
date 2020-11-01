import React from 'react'
import '../styles/hero.css'
import Button from './button'
import  Service from './service'
import Location from './location'

const Hero = (props) => {
    return (
        <div className='hero'>
            <div className="container">
                <div>
                    <h1>{props.text}</h1>
                    <p>Caro visitante, seja bem vindo! Aqui você encontra serviços como: ajuste, conserto, customização e muito mais. <br/>Contamos com profissionais qualificados e com muita experiência para lhe atender da melhor maneira.<br/>Solicite já um orçamento!</p>
                    <Button className='btn1' text='Eu quero!'/>
                </div>
                    <img src={props.img} alt="seam"/>
            </div>
            <Service/>
            <Location/>
        </div> 
    )
}

export default Hero