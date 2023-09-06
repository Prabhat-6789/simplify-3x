/*This file contains logic of frontend of login part.Like argument taking email and password.
then send to the server.*/

import "./login.css";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Login = () => {

    const history = useHistory();
    const [email,changeEmail] = useState("");
    const [password,changePassword] = useState("");

    const handleChangeEmail = (e)=>{changeEmail(e.target.value);};
    const handleChangePassword = (e)=>{changePassword(e.target.value);};

    const loginData = async ()=>{

        try{
            console.log("email:",email,"password:",password);
            const Data = await axios.post('http://localhost:8000/api/login', {
            email,password
          });

          //console.log("data: ",Data.response);
          await localStorage.setItem("jwt",Data.data);
          //console.log("localstorage item:",parsedData);
          history.push("/");
          console.log("data: ",Data.data);
        }

        catch(error){
                console.log("error:",error);
            }
    }

    return ( 
        <div className="login-parent">
            <h2 style={{textAlign:"center",textDecoration:"underline"}}>Simplify3x</h2>

            <div className="login">
                <input className="input" onChange={handleChangeEmail} value={email} placeholder="email" type="text" id="email"/>
                <br/>
                <br/>
                <input className="input" onChange={handleChangePassword} value={password} placeholder="password" type="password" id="password"/>
                <br/>
                <br/>
                <button onClick={loginData} className="button">login</button>
                <br/>
            </div>
        </div>
     );
}

export default Login;