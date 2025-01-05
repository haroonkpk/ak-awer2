import React from 'react';  
import Bookscard from '../Components/bookcard';  
import '../index.css';
import Header from '../Components/header';

export default function Books() {  
  return (  
    <>
         <Header/>
    <div style={{ width: "100%",minHeight: "100%", position: "relative", display: "flex", flexWrap: 'wrap', padding: "10px" }}>  
        <Bookscard />
      </div>  
    </>
  );  
}