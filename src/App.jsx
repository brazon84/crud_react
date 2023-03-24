import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import UserList from "./components/userList/UserList";
import Navbar from "./components/navbar/Navbar";





function App() {
  const baseUrl = "https://users-crud.academlo.tech/";
  const [user, setUser] = useState([]);
  const [loadUsers, setLoadUsers] = useState(false);
  
 
//se realiza la peticion a la api mediante axios
  const getUser = async () => {
    try{ 
      const res =await axios
      .get(baseUrl + "users/");
        return(res.data);
    }
      catch(error){
        console.log(error);
      };
  };

  const createUser = async (newUsers) => {
    try {
      const res = await axios.post(baseUrl + "users/", newUsers)
      console.log(res.data)
    } catch (error) {
      
      console.log(error)
    }
  }

  const deleteUser = async (userId) => {
    try {
      await axios.delete(baseUrl + `users/${userId}/`);
      alert('elemento eliminado')
    } catch (error) {
      console.log(error);
    }
  };

  const editUser = async (userId, updatedUser) => {
    try {
      await axios.put(baseUrl + `users/${userId}/`, updatedUser);
      alert('elemento editado')
    } catch (error) {
      console.error(error);
    }
  };
  
  const loadUser = async () => {
    try {
      setLoadUsers(true);

      const Users = await getUser();
setUser(Users)
setLoadUsers(false)

    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div>
      <Navbar loadUser={loadUser} createUser={createUser}/>
      <UserList user={user} deleteUser={deleteUser} editUser={editUser}/>
  
     
         
    </div>
  );
}

export default App;
