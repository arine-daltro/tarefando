import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { useState } from 'react'

import Cadastro from '../Pages/Cadastro';
import Inicial from '../Pages/Inicial';
import Splash from '../Pages/Splash';

function Routes(){
    
    const [tarefas, setTarefas] = useState([
        {id: 1, titulo: 'Varrer a casa', checked:true},
        {id: 2, titulo: 'Limpar o fogão', checked:true},
        {id: 3, titulo: 'Fazer almoço', checked:true},
        {id: 4, titulo: 'Estudar React', checked:false},
        {id: 5, titulo: 'Namorar', checked:false}
    ])

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Splash}/>
                <Route path="/inicial" render={
                    (props) => (<Inicial tarefas={tarefas} setTarefas={setTarefas} {...props} />)
                }/>
                <Route path="/cadastro" render={
                    (props) => (<Cadastro tarefas={tarefas} setTarefas={setTarefas} {...props} />)
                }/>
            </Switch>   
        </BrowserRouter>
    )
}

export default Routes