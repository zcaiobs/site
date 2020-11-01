import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './styles/main.css'
import Hero from './component/hero'
import Service from './component/service'
import Location from './component/location'
import img from './images/seam.svg'

const Main = () => {
    return (
        <div className='main'> 
            <Switch>
                <Route exact path='/'><Hero text='Suelier - Atelier de Costura' img={img}/></Route> 
                <Route path='/service'><Service/></Route>
                <Route path='/location'><Location/></Route>
            </Switch>
        </div> 
    )
}

export default Main