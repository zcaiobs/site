import React, {useState} from 'react'
import '../styles/burger.css'

const Burger = () => {

    const [line, setLine] = useState('')
    
    const active = () => {
        if ( line === '' ) {
            setLine('active')
        } else {
            setLine('')
        }
    }

    return (
        <div className={'burger '+line} onClick={active}>
            <div className="line-1"/>
            <div className="line-2"/>
            <div className="line-3"/>
        </div>
    )
}

export default Burger