import React, {useState} from "react";

import PopUp from "../PopUp/índex";

function Modal(){

    const[addUser,setAddUser] = useState(false)

    return(
        <div className="backdrop">
            {addUser ? <PopUp/> : <div/> }
        </div>
    )

}

export default Modal;