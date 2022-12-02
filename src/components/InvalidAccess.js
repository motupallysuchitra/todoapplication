import React from "react"
import { useNavigate } from "react-router-dom"



const InvalidAccess  = () =>{
    let navigate=useNavigate();

    function redirectionlogin(){
        navigate("./login", true)

    }


    return(

        <> <p>InvalidAccess credentials,please verify your creds.</p>
        <form>
              <button onClick={redirectionlogin}>log Back In</button></form> 
                </>
    )
    }


export default InvalidAccess
