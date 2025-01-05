import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

function AuthorTable() {

  const [AuthorData,setAuthorData]=useState([]);

  useEffect(()=>{

    axios.get('http://localhost:8000/user')
    .then((res)=>{ 
      const adminUser = res.data.filter((user)=>user.role=="ADMIN")
      setAuthorData(adminUser)
      console.log(res);
      
    })
    
    .catch((res)=> console.log(res.data))
  },[])
  console.log(AuthorData)
  
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Id</th>
          <th>FullName</th>
          <th>Email</th>
          <th>role</th>
          <th>AddedBooks</th>
        </tr>
      </thead>
      <tbody>
        {AuthorData.map((admin)=>{
          return(
            <tr>
              <td>{admin._id}</td>
              <td>{admin.fullname}</td>
              <td>{admin.email}</td>
              <td>{admin.role}</td>
              <td>{admin.books.length}</td>
            </tr>
          )
        })}

      </tbody>
    </Table>
  );
}

export default AuthorTable;