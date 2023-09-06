/*this is signup file of frontend.All frontend logic for signup is written here.*/

import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from 'axios';
import "./signUp.css";

const Signup = () => {

    const history = useHistory();
    const [firstName,changeFirstName] = useState("");
    const [errorFirst,setErrorFirst] = useState(" ");
    const [errorLast,setErrorLast] = useState("");
    const [errorNumber,setErrorNumber] = useState("");
    const [errorEmail,setErrorEmail] = useState("");
    const [lastName,changeLastName] = useState("");
    const [number,changeNumber] = useState("");
    const [company,changeCompany] = useState("");
    const [employeeId,changeEmployeeId] = useState("");
    const [employeeRole,changeEmployeeRole] = useState("");
    const [email,changeEmail] = useState("");
    const [password,changePassword] = useState("");

    const handleChangeFirstName = (e)=>{changeFirstName(e.target.value);};
    const handleChangeLastName = (e)=>{changeLastName(e.target.value);};
    const handleChangeNumber = (e)=>{changeNumber(e.target.value);};
    const handleChangeCompany = (e)=>{changeCompany(e.target.value);};
    const handleChangeEmployeeId = (e)=>{changeEmployeeId(e.target.value);};
    const handleChangeEmployeeRole = (e)=>{changeEmployeeRole(e.target.value);};
    const handleChangeEmail = (e)=>{changeEmail(e.target.value);};
    const handleChangePassword = (e)=>{changePassword(e.target.value);};

    const postData = async ()=>{

        console.log("entered in postdata block");
        try{
            

         if(!errorFirst && !errorLast && !errorNumber && !errorEmail)
         {
            const payload = {firstName,lastName,number,company,employeeId,employeeRole,email,password};
            const data = await axios.post('http://localhost:8000/api/register', payload);
            history.push("/");
            console.log("data: ",data);
         }

         else
         console.log("please enter valid details")
        }

        catch(error){
                console.log("error:",error);
            }
    }

    const checkForSpecialCharactersFirst = () => {
        const specialCharacterPattern = /[!@#$%^&*(),;?":{}|<>0-9]/;
    
        if (specialCharacterPattern.test(firstName)) {
            setErrorFirst('Please enter a valid name without special characters.');
        } else {
            setErrorFirst('');
        }
    };

    const checkForSpecialCharactersLast = () => {
        const specialCharacterPattern = /[!@#$%^&*(),;?":{}|<>0-9]/;
    
        if (specialCharacterPattern.test(lastName)) {
            setErrorLast('Please enter a valid name without special characters.');
        } else {
            setErrorLast('');
        }
    };

    const checkForSpecialCharactersNumber = () => {
        const specialCharacterPattern = /^\d{10}$/;
    
        if (specialCharacterPattern.test(number)) {
            setErrorNumber('');
        } else {
            setErrorNumber('please enter valid number');
        }
    };

    const checkForSpecialCharactersEmail = () => {
        const specialCharacterPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,4}$/;;
    
        if (specialCharacterPattern.test(email)) {
            setErrorEmail('');
        } else {
            setErrorEmail('please enter valid email');
        }
    };

    return ( 
        <div className="signup-parent">
            <h2 style={{textAlign:"center",textDecoration:"underline"}}>Simplify3x</h2>

            <div className="signup">

                <div>
                    <input onChange={handleChangeFirstName} onBlur={checkForSpecialCharactersFirst} className="input" value={firstName} placeholder="fistName" type="text" id="firstName"/>
                    {errorFirst && <p className="error">{errorFirst}</p>}
                </div>
                <br/>
                <div>
                    <input onChange={handleChangeLastName} onBlur={checkForSpecialCharactersLast} className="input" value={lastName} placeholder="lastName" type="text" id="lastName"/>
                    {errorLast && <p className="error">{errorLast}</p>}
                </div>
                <br/>
                <div>
                    <input onChange={handleChangeNumber} onBlur={checkForSpecialCharactersNumber} className="input" value={number} placeholder="Number" type="tel" id="Number"/>
                    {errorNumber && <p className="number">{errorNumber}</p>}
                </div>
                <br/>
                <br/>
                <input onChange={handleChangeCompany} className="input" value={company} placeholder="company" type="text" id="company"/>
                <br/>
                <br/>
                <input onChange={handleChangeEmployeeId} className="input" value={employeeId} placeholder="employeeId" type="text" id="employeeId"/>
                <br/>
                <br/>
                <input onChange={handleChangeEmployeeRole} className="input" value={employeeRole} placeholder="employeeRole" type="text" id="employeeRole"/>
                <br/>
                <br/>
                <div>
                    <input onChange={handleChangeEmail} onBlur={checkForSpecialCharactersEmail} className="input" value={email} placeholder="email" type="text" id="email"/>
                    {errorEmail && <p className="email">{errorEmail}</p>}
                </div>
                <br/>
                <br/>
                <input onChange={handleChangePassword} className="input" value={password} placeholder="password" type="password" id="password"/>
                <br/>
                <br/>
                <button onClick={postData} className="button">signUp</button>
                <br/>
            </div>
        </div>
     );
}

export default Signup;