import '../Styles/global.css'
import Tarefas from '../Componente/Tarefas'

import Button from '../Componente/Button'
import Logo from '../Componente/Logo'
const Inicial = props =>{

    return(

        <>  
            <div className='logo-menor'>
                <Logo/>
            </div> 
            { (()=>{
                if (props.tarefas.length) {
                    return[
                        props.tarefas.map(tarefa => 
                            <Tarefas titulo={tarefa.titulo} id={tarefa.id} checked={tarefa.checked}/>
                        )
                    ]
                } else {
                    return[
                        <div className='card'>
                            <p className='texto-inicial'>Você ainda não cadastrou tarefas.</p>
                            <p className='texto-inicial'>Para adicionar, clique no botão <strong>"+"</strong> abaixo.</p>   
                        </div>
                    ]
                }
            })()}
            <Button/>
        </> 
    )
}
export default Inicial