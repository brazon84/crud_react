import React, {useState} from 'react'
import Modal from '../modal/Modal'

const Navbar = ({createUser}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>

    <nav className="d-flex  justify-content-around items-center mb-5">

      <h1 className="text-3xl font-bold">Users Admin</h1>

      <button className="border border-0 fs-1 fw-bold bg-primary text-white p-2" onClick={handleShow}>
      <i className="fa-solid fa-plus"></i>
      </button>

    </nav>
    <Modal show={show} handleClose={handleClose} createUser={createUser} />
    </>
  )
}

export default Navbar
