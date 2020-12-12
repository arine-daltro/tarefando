import Logo from '../Componente/Logo'
import { useHistory } from 'react-router-dom';

const Splash =()=>{
    
    const historico = useHistory()

    function redirect(){
        let caminho = 'inicial'
        setTimeout(() => {
            historico.push(caminho)
        }, 5000);
    }

    redirect()
    
    return(

        <Logo/>
    )
}
export default Splash