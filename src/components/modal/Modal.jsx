import React  from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';



const ModalUser = ({show, handleClose, createUser}) => {
  
  const { register,handleSubmit  } = useForm();
  return (
    <>


    <Modal show={show} onHide={handleClose} className="d-flex align-content-center flex-wrap" >

        <Modal.Header closeButton>
          <h5 className="modal-title">Users</h5>
        </Modal.Header>
        <Modal.Body>
<div>

<label htmlFor="nameId" className="font-semibold">

  First Name:{' '}

</label>

<input type="text" id="nameId" {...register('first_name')} />
</div>


<div>

<label htmlFor="lastNameId" className="font-semibold">

  Last Name:{' '}

</label>

<input type="text" id="lastNameId"  {...register('last_name')} />

</div>

<div>

<label htmlFor="emailId" className="font-semibold">

  Email:{' '}

</label>

<input type="text" id="emailId"  {...register('email')} />

</div>

<div>

<label htmlFor="passwordId" className="font-semibold">

  Password:{' '}

</label>

<input type="password" id="passwordId"  {...register('password')} />

</div>

<div>

<label htmlFor="birthday" className="font-semibold">

  Birthday:{' '}

</label>

<input type="date" id='birthday'  {...register('birthday')} />
        </div>
</Modal.Body>
       <Modal.Footer>
          <Button variant="primary"  onClick={handleSubmit((data) => createUser(data))} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalUser
