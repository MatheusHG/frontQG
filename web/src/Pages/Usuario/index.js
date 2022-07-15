import React, {useState} from "react";
import * as S from './style';
import id from '../../Asssets/id.png'
import User from '../../Components/User/index'
import PopUp from "../../Components/PopUp/índex";


import { useUserContext } from '../../Hooks/useUserContext'

function Usuario(){

    const {addUser, setAddUser} = useUserContext(false)


    function adicionaUsuario(e){

        e.preventDefault()
        setAddUser(!addUser);
    }

    var array = [
        {email : 'andre.martins@ccc.ufcg.edu.br'},
        {email : 'jose.arthur.brito@ccc.ufcg.edu.br'},
        {email : 'vitinho@ccc.ufcg.edu.br'},
        {email : 'davyson@ccc.ufcg.edu.br'},
        {email : 'kleber@ccc.ufcg.edu.br'},
        {email : 'jonatas@ccc.ufcg.edu.br'},
        
    ]

    function listarUsers(a){
        return(
            a.map((element,index)=>{
                return <User Identificador = {element} key = {'user-'+index}/>
            })
        )
    }

    

    return (
        <S.Container>
            <S.Logo>            
                <img src={id} alt="Logo"/>
            </S.Logo>
            <S.Tabs>
                <S.Admin>
                    <button> Usuários Admin </button>
                </S.Admin>
                <S.Postos>
                    <button> Postos </button>
                </S.Postos>
            </S.Tabs>
            <S.Content>
                <S.Envolter>
                    {
                        listarUsers(array)
                    }
                </S.Envolter>
            <S.Frame>
                    <button onClick={adicionaUsuario}>  
                            <h3> +  Adicionar Usuário </h3> 
                    </button>
            </S.Frame>
            </S.Content>
            <div>
                {addUser ? <PopUp/> : <div/> }
            </div>
        </S.Container>
        

    )
}

export default Usuario;