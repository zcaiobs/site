import React from 'react'
import '../styles/service.css'
import Item from './item'
import barraImg from '../images/barra.png'
import ajustesImg from '../images/ajustes.png'
import customImg from '../images/custom.png'
import buttonImg from '../images/button.png'

const Service = () => {
    return (
        <div className='service'>
            <div>
                <Item img={barraImg} title='Barras e Bainhas' text='As barras ou bainhas podem ser feitas em calças, vestidos, bermudas, camisas entre outros. Existem muitos tipos de barras, as mais comuns são: barra simples e barra original.'/>
                <Item img={ajustesImg} title='Ajustes e Consertos' text='O Ajuste de roupa contribui com o caimento da peça e proporciona muito mais conforto. Já o conserto é uma forma rápida para recuperar pequenas avarias na peça.'/>
                <Item img={customImg} title='Reformas e Customizações' text='A customização está diretamente ligada à criatividade, onde pode ser aplicados patches, rendados, cortes ou o que você imaginar. Reforma é um processo de reconstrução da peça.'/>
                <Item img={buttonImg} title='Troca de botões e Zíperes' text='Os zíperes danificados podem ser trocados por novos, esse serviço é muito comum em nosso atelier. E claro, também colocamos ou trocamos os botões de sua roupa.'/>
            </div>
        </div> 
    )
}

export default Service