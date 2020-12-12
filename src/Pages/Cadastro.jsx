import Logo from "../Componente/Logo"
import salvar from '../Img/salvar.png'
import { useHistory } from 'react-router-dom';

const Cadastro =()=>{
    
    const historico = useHistory()

    function addTarefa(e) {
        let caminho = 'inicial'
        historico.push(caminho)
    }

    return(

        <>
            <div className='logo-menor logo-menor-cadastro'>
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