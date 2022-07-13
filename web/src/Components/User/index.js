import React from "react";
import * as S from './style';
import Exclui from '../../Asssets/Exclui.png'

function User(){
    return(
        <S.Container>
        <S.Icon>

        </S.Icon>
        <S.Data>
            <h3> andre.martins@ccc.ufcg.edu.br </h3>
            <button> <img src={Exclui} alt="Logo"/> </button>
        </S.Data>
    </S.Container>

    )
    
}

export default User;