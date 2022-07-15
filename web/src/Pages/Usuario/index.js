import React, {useState} from "react";
import * as S from './style';
import id from '../../Asssets/id.png'

import Postos from "../../Components/Postos";

import UserNavigate from "../../Components/UserNavigate";

function Usuario(){

    const [main,setMain] = useState('user')

    function getUser(e){
        e.preventDefault()
        setMain('user')   
    }
    
    function getPosto(e){
        e.preventDefault()
        setMain('posto') 
    }

    return (
        <S.Container>
            <S.Logo>            
                <img src={id} alt="Logo"/>
            </S.Logo>
            <S.Tabs>
                <S.Admin>
                    <button onClick={getUser}> Usuários Admin </button>
                </S.Admin>
                <S.Postos>
                    <button onClick={getPosto}> Postos </button>
                </S.Postos>
            </S.Tabs>
            {main === 'user' ? <UserNavigate/> : <Postos/>}
        </S.Container>
        

    )
}

export default Usuario;