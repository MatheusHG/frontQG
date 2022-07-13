import React from "react";
import * as S from './style';
import id from '../../Asssets/id.png'
import User from '../../Components/User/index'

function Usuario(){
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
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
            </S.Content>

        </S.Container>
    )
}

export default Usuario;