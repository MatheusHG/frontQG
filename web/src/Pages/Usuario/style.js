import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const Logo = styled.div`
    width: 1280px;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img{
        width: 120px;
        height: 29px;
    }
`

export const Tabs = styled.div`
    display: flex;
    flex-direction: row;
    width: 700px;
    height: 50px;

`


export const Admin = styled.div`
    width: 350px;
    height: 50px;
    display: flex;
    justify-content: center;

    button{
        width: 350px;
        height: 50px; 
        background: #F20F38;
        border: 1px solid #F20F38;
        border-radius: 5px 5px 0px 0px; 

        font-family: 'Kanit';
        font-style: italic;
        font-weight: 700;
        font-size: 15px;
        line-height: 22px;

        color: #FEFEFE;
    }
`


export const Postos = styled.div`
    width: 350px;
    height: 50px;
    display: flex;
    justify-content: center;

    font-family: 'Kanit';
    font-style: italic;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;

    color: #F20F38;
    
    button{
        border: 1px solid #FFFF;
        //background-color: #FFFF;
        background-color: green ;
        width: 350px;
        height: 50px;
        font-family: 'Kanit';
        font-style: italic;
        font-weight: 400;
        font-size: 15px;
        line-height: 22px;

        color: #F20F38;
    }

`

export const Content = styled.div`
    width: 1280px;
    height: 420px;
    background: #FEFEFE;
    border-top: 2px solid #F20F38;
    padding-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: start;
    
    flex-wrap: wrap;

`