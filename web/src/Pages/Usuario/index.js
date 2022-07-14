import React from "react";
import * as S from './style';
import id from '../../Asssets/id.png'
import User from '../../Components/User/index'
import PopUp from "../../Components/PopUp/índex";
import Vector from '../../Asssets/Vector.png'

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
                <S.Envolter>
                    <User/>
                    <User/>
                    <User/>
                    <User/>
                    <User/>
                    <User/>
                    <User/>
                </S.Envolter>
            <S.Frame>
                    <button>  
                            <h3> +  Adicionar Usuário </h3> 
                    </button>
            </S.Frame>
            </S.Content>
            <PopUp/>
        </S.Container>
        

    )
}

export default Usuario;