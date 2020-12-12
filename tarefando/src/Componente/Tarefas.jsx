import lixeira from '../Img/lixeira.png'
import check from '../Img/check.png'
import checked from '../Img/checked.png'


function Tarefas(props){
    function excluirTarefa(){
    }

    return(

        <div key={props.id} className='card-tarefa'>

            {(()=>{
                
                if (props.checked) {
                    return [
                        <img className='check' src={checked} alt="Tarefa concluída"/>
                    ]
                } else {
                    return [
                        <img className='check' src={check} alt="Tarefa não concluída"/>
                    ]
                }

            })()}
            

            <p className='titulo-tarefa'>
               {props.titulo}
            </p>
            
            <button className='botao-lixeira' onClick={excluirTarefa}>
                <img src={lixeira} alt="Excluir tarefa"/>
            </button> 
        </div>
    )
}
export default Tarefas