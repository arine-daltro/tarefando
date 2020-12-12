import Logo from "../Componente/Logo"
import salvar from '../Img/salvar.png'
import { useStete } from 'react'
import { useHistory } from 'react-router-dom';

const Cadastro =(state)=>{
    
    const historico = useHistory()

    function addTarefa(e) {
        // debugger
        // const {tarefas, titulo} = state
        // state.setTarefa({ tarefas: [ ...tarefas, {
        //     titulo: titulo.value,
        //     checked: false
        // } ] })
        let caminho = 'inicial'
        historico.push(caminho)
    }

    return(

        <>
            <div className='logo-menor'>
                <Logo/>
            </div> 
            <div className='card1'>
                <p className='titulo-cadastro'>Adicionar tarefa</p>
                <form onSubmit={addTarefa}>
                    <label>
                        <p className='nome'>Nome da tarefa</p>
                        <input className='input' 
                               type="text" 
                               name="titulo" 
                               placeholder='Titulo da tarefa' />
                    </label>
                    <button type="submit" className='botao2'>
                        <img src={salvar} alt="salvar"/> Salvar
                    </button>
                </form>
            </div>
        </>    
    )
}
export default Cadastro 