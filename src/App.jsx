import React, { useEffect } from 'react'
import Header from './Components/header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Author from './pages/Author'
import books from './pages/Books'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Foter from './Components/Foter'
import DeleteBook from './pages/DeleteBook'
import AddBook from './pages/AddBook'

function App() {
  const [userName,setUserName]=React.useState();
  useEffect(()=>{
    const name=localStorage.getItem("name");
    setUserName(name);
  }, [userName]);
  console.log(userName);
  return (
    <div style={{width:'100%',height:"100vh"}}>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/Books' Component={books}/>
        <Route path='/AddBook' Component={AddBook}/>
        <Route path='/DeleteBook' Component={DeleteBook}/>
        <Route path='/Author' Component={Author}/>
        <Route path='/Signup' Component={Signup}/>  
        <Route path='/Login' Component={Login}/>
      </Routes>
      <Foter/>      
    </div>
  )
}

export default App