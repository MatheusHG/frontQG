import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom'

import Usuario from '../Pages/Usuario/index.js'
import PopUp from "../Components/PopUp/índex.js";

const Rotas = ()=>{
    return(

        <BrowserRouter>
            <Routes>
                <Route path="/" caseSensitive={false} element={<Usuario />} /> 
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas