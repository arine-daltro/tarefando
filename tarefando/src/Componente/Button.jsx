import React from 'react';
import { useHistory } from 'react-router-dom';
import mais from '../Img/mais.png'

const Button=()=>{
    const historico = useHistory()
    function redirecionar(){
        let caminho = 'cadastro'
        historico.push(caminho)
    }
    return(

            <div className='footer'>
                <button className='botao' onClick={redirecionar}>
                   <img src={mais} alt="Botão adicionar"/> 
                </button>
            </div>
    )
}
export default Button