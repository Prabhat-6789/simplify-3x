/*this file contains frontend part of profile.Like when anybody click on VIEW link.
then after that how profile of that particular ID will be shown,that logic is written in this file*/

import { useState,useEffect } from "react";
import axios from 'axios';
import './profile.css';

const Profile = (props) => {
    console.log("id in profile component: ",props.id);
    
    const [data,setData] = useState("");

    useEffect(function fun(){
        axios.get(`http://localhost:8000/api/profile/${props.id}`)
        .then((response) => {
        const data = response.data;
        setData(data);
        console.log(data,typeof(data));
        })
        .catch((error) => {
        console.error('Error:', error);
        });
    },[props.id]);
    return (
        <div className="profile">
            <p>Name: {data.firstName} {data.lastName}</p>
            <p>email: {data.email}</p>
            <p>company: {data.company}</p>
            <p>role: {data.employeeRole}</p>
            <p>phone no.: {data.number}</p>
            <p>employeeId: {data.employeeId}</p>
        </div>
    );
}
 
export default Profile;