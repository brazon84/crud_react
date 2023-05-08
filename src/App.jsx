import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import UserList from "./components/userList/UserList";
import Navbar from "./components/navbar/Navbar";
import "./App.css";

function App() {
  const baseUrl = "https://crud-db-qm3r.onrender.com/";
  const [user, setUser] = useState([]);
  const [loadUsers, setLoadUsers] = useState(false);
  const [editUserId, setEditUserId] = useState(false);

  //se realiza la peticion a la api mediante axios
  const getUser = async () => {
    try {
      const res = await axios.get(baseUrl + "users/");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const createUser = async (newUsers) => {
    try {
      await axios.post(baseUrl + "users/", newUsers);
      loadUser();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      
      await axios.delete(baseUrl + `users/${id}`);
      alert("Elemento eliminado");
      const updatedUsers = user.filter((u) => u.id !== id);
      setUser(updatedUsers);
    } catch (error) {
      console.log(error);
    }
  };
  const editUser = async (id, updatedUser) => {
    try {
      await axios.put(baseUrl + `users/${id.id}`,updatedUser);
      setEditUserId();
      loadUser();
    } catch (error) {
      console.error(error);
    }
  };

  const loadUser = async () => {
    try {
      setLoadUsers(true);
      const Users = await getUser();
      setUser(Users);
      setLoadUsers(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div>
      <Navbar loadUser={loadUser} createUser={createUser} />
      <UserList user={user} deleteUser={deleteUser} editUser={editUser} />
    </div>
  );
}

export default App;
