import styled from 'styled-components';
import Img from '../../Asssets/Img.png'
import Exclui from '../../Asssets/Exclui.png'



export const Container = styled.div`

    width: 220px;
    height: 150px;
    display: flex;
    flex-direction: column;
    background: #EFEFEF;
    padding: 2px;
    margin: 10px;

`

export const Icon = styled.div`
    width: 220px;
    height: 100px;
    background-image: url(${Img});

`
export const Data = styled.div`
    width: 220px;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #ffff;

    h3{
        font-family: 'Kanit';
        font-style: italic;
        font-weight: 400;
        font-size: 10px;
        line-height: 15px;
        color: #023059;
        padding: 15px;
    }

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
        border: 1px solid #FFFF;
        background-color: #FFFF;
        padding: 19px;
        cursor: pointer;
    }


`
