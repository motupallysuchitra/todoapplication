import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoginDetails from '../LoginDetails.json';
import "./login.css"
const Login =(props) => {
     let location =useLocation();
     let navigate=useNavigate();
     console.log(location.pathname)
     console.log(location.search)
     if(location.pathname=== null){
        navigate("./home",true)
     }

     

const[FormData,setformdata]=useState({
        email:'',
        password:''
    });
    const{email,password}=FormData

    function handlesubmit(e){
        //preventing default behavior of event.
        e.preventDefault();
        // console.log(e.target[0].value);
        // console.log(e.target[1].value);
        // console.log("Checking");
        if(LoginDetails.email=== email && LoginDetails.password=== password){

        
        //     props.updateState(true);
        
        navigate("/chatapplication",true)}


else{
    
        navigate("/InvalidAccess",true)
    }
    

        }
        
    const handlechange= e =>{
        e.preventDefault();
        const {name,value}=e.target;
        setformdata({...FormData,[name]:value});
        console.log(FormData);
    }
    return(
        <div className="login-inputs">
            <form onSubmit={handlesubmit} className="Login-form">
                <h3>Login</h3>
                <div>
                    <label htmlFor="Email">Email:</label>
                    <input type="email" name="email" id="email" onChange={handlechange} value={email}/>
                </div>
                <div>
                <label htmlFor="password">password:</label>
                    <input type="password" name="password" id="password" onChange={handlechange} value={password}/>
                </div>
                <button type="submit" id="button">login</button>
            </form>
        </div>
    );
}
export default Login;