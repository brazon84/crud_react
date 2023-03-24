import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './usercard.css'
import Modal from '../modal/Modal.jsx';

const UserCard = ({ user, deleteUser, editUser }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
    setShowModal(false);
  }

  return (
    <>
      <div className="card d-flex align-content-center flex-wrap bottom-0">
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
          <div className="d-flex justify-content-center align-items-center flex-wrap gap-3 ">
            <button className="btn btn-primary m-2" onClick={() => handleEditUser(user)}>
              <i className="fa-solid fa-pencil"></i>
            </button>{" "}
            {"  "}
            <button className="btn btn-danger" onClick={() => deleteUser(user.id)}>
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </article>
      </div>
      <Modal
        show={showModal}
        handleClose={handleCloseModal}
        editUser={editUser}
        user={selectedUser}
      />
    </>
  );
};

export default UserCard;
