import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './usercard.css'

const UserCard = ({ user, deleteUser, editUser }) => {
  
  return (
    <>
    <div className="card d-flex align-content-center flex-wrap">
      <article className=" p-3 align-content-center justify-content-center align-items-center flex-wrap">
        <h2>
          {user.first_name} {user.last_name}
        </h2>
        <ul>
          <li>
            <span>MAIL: </span>
            {user.email}
          </li>
          <li>
            <span>BIRTHDAY: </span>
            {user.birthday}
          </li>
        </ul>
        <div className="d-flex justify-content-center align-items-center flex-wrap gap-3">
          <button className="btn btn-primary m-2" onClick={() => editUser(user.id)}>
          <i class="fa-solid fa-pencil"></i>
          </button>{" "}
          {"  "}
          <button className="btn btn-danger" onClick={() => deleteUser(user)}>
          <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </article>
    </div>
    </>
  );
};

export default UserCard;
