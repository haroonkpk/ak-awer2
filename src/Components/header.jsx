import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "../index.css";
import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [userPermetion,setuserPermetion]=useState(null);
  const navigate = useNavigate();

  useEffect(()=>{
      const role=(localStorage.getItem("role"));
      setuserPermetion(role)
      
  },[userPermetion]);

function logout() {
  localStorage.removeItem("user");
  localStorage.removeItem("name");
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  setuserPermetion(null); 
  navigate("/Login");
  window.location.reload(logout); 
}

  return (
    <div>
              <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">{userPermetion}</Navbar.Brand>
          <Nav style={{width:"100%", display:"flex",justifyContent:"space-around",}}>
            <Link className='nav' to="/">Home</Link>
            {userPermetion=="USER"?(
              <>
             <Link className='nav' to="/Books">Books</Link>
             <Link className='nav' to="/Author">Author</Link>
             <Link className='nav' onClick={logout} >logOut</Link>
             </>
            ):userPermetion=="ADMIN"?(
              <>
              <Link className='nav' to="/Books">Books</Link>
             <Link className='nav' to="/Author">Author</Link>
             <Link className='nav' to="/AddBook">AddBook</Link>
             <Link className='nav' to="/DeleteBook">DeleteBook</Link>
             <Link className='nav' onClick={logout} >logOut</Link>
             </>
            ):(
              <>
            <Link className='nav' to="/Signup">Signup</Link>
            <Link className='nav' to="/Login">Login</Link>
            </>
            )}
            

          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}