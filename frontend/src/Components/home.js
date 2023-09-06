/*this file contains logic of home page.Like tables are contained by this file.
and the table contains like objectId,name,email,view link,delete link and edit link.*/

import React, { useState,useEffect } from 'react';
import Profile from './profile';
import axios from 'axios';
import Edit from './editComponent';

function Home() {
  const [selectedId, setSelectedId] = useState(null);
  const [users,setAllUser] = useState([]);
  const [showComponentProfile,setShowComponentProfile] = useState(false);
  const [showComponentEdit,setShowComponentEdit] = useState(false);

  const handleViewClick = (id) => {
    // Handle the click event on the View Link
    console.log("id: ",id);
    setSelectedId(id);
    setShowComponentProfile(true);
    setShowComponentEdit(false);
  };

  const handleEditClick = (id) => {
    // Handle the click event on the View Link
    console.log("id: ",id);
    setSelectedId(id);
    setShowComponentEdit(true);
    setShowComponentProfile(false);
  };

  const handleDeleteClick = (id) => {

    axios.delete(`http://localhost:8000/api/deleteProfile/${id}`);
  }

useEffect(function fun(){
    axios.get('http://localhost:8000/api/getAllUser')
    .then((response) => {
    const data = response.data;
    setAllUser(data);
    console.log(data,typeof(data));
    })
    .catch((error) => {
    console.error('Error:', error);
    });
},[users]);

  return (
    <div>
      <h2>User Table</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>View Link</th>
            <th>Edit Link</th>
            <th>Delete Link</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user._id}</td>
              <td>{user.firstName} {user.lastName}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleViewClick(user._id)} style={{cursor:"pointer"}}>View</button>
              </td>
              <td>
                <button onClick={() => handleDeleteClick(user._id)} style={{cursor:"pointer"}}>Delete</button>
              </td>
              <td>
                <button onClick={() => handleEditClick(user._id)} style={{cursor:"pointer"}}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedId && (
        <div>
          {showComponentProfile ? <Profile id={selectedId}/> : (<div></div>)}
        </div>
      )}

      {
        selectedId && (
            <div>
                {showComponentEdit ? <Edit id={selectedId}/> : (<div></div>)}
            </div>
        )
      }
    </div>
  );
}

export default Home;
