import React from "react";
import './Chatapplication.css'
import{ useLocation, useNavigate} from 'react-router-dom'

  const Chatapplicationlist = () => {

    let location=useLocation();

    let navigate=useNavigate();


    console.log(location)

const logout =()=>
navigate("/login",true)
    return(
        <div className="chat-form">
          <div>
            this is chatapplicationlist components
          </div>
          <button on onClick={logout}>logout</button>
            <form>
            <input type='text'id='task'/>.
                <div className="buttons">
                <button name="delete" id="delete">delete</button>
                <button name="Addtask" id="Addtask">Addtask</button>
                
              </div>
            </form>

        </div>
        
                
    )
}
export default Chatapplicationlist;