import React, {useEffect, useState}from 'react'
import UserCard from './../userCard/UserCard';
import Pagination from 'react-bootstrap/Pagination';



const UserList = ({user, deleteUser, editUser}) => {
  const [activePage, setActivePage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);
  const itemsPerPage = 20;


  const paginate = (pageNumber) => {
    setActivePage(pageNumber);
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = pageNumber * itemsPerPage;
    setCurrentItems(user.slice(startIndex, endIndex));
  };


  const items = [];
  for (let number = 1; number <= Math.ceil(user.length / itemsPerPage); number++) {
    items.push(
      <Pagination.Item key={number} active={number === activePage} onClick={() => paginate(number)}>
        {number}
      </Pagination.Item>
    );
  }

  useEffect(() => {
    setCurrentItems(user.slice(0, itemsPerPage));
    setActivePage(1);
  }, [user]);


  return (
    <div>
    <section className='d-flex gap-3 flex-wrap '>
        {currentItems.map((user)=>
        <UserCard key={user.id} user={user} deleteUser={deleteUser} editUser={editUser}/>)}
    </section>
    <div>

<Pagination className='d-flex justify-content-center p-5 rounded'>{items}</Pagination>
</div>
    </div>
  )
}

export default UserList






