import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useState } from 'react';
import Header from '../Components/header';
import {useNavigate } from 'react-router-dom';

function AddBook() {
  const navigate=useNavigate();
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [authorId, setauthorId] = useState("");
  const [price, setprice] = useState("");
  const [img, setimg] = useState("");

  function submithandler(e){
    e.preventDefault(); 
      axios.post("http://localhost:8000/book",{
      title,
      description,
      authorId,
      price,
      img
    });
    navigate("/Books")
  }
 
  return (
    <div>
      <Header/>
    <Form className='container' style={{marginTop:'20px'}} onSubmit={submithandler}>
        <h1 className='bg-dark'>Add Book</h1>
      <Form.Group className=" bg-dark" controlId="formGroupEmail">
        <Form.Label>Book Name</Form.Label>
        <Form.Control type="name" placeholder="Enter Book Name" value={title} onChange={(e)=> settitle(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3 bg-dark" controlId="formGroupPassword">
        <Form.Label>Book description</Form.Label>
        <Form.Control type="description" placeholder="Enter description" value={description} onChange={(e)=> setdescription(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3 bg-dark" controlId="formGroupPassword">
        <Form.Label>Book authorId</Form.Label>
        <Form.Control type="name" placeholder="Enter Book authorId" value={authorId} onChange={(e)=> setauthorId(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3 bg-dark" controlId="formGroupPassword">
        <Form.Label>Book price</Form.Label>
        <Form.Control type="number" placeholder="Book price" value={price} onChange={(e)=> setprice(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3 bg-dark" controlId="formGroupPassword">
        <Form.Label>Book Image</Form.Label>
        <Form.Control type="name" placeholder="Book img" value={img} onChange={(e)=> setimg(e.target.value)}/>
      </Form.Group>
      <Button type='sbmit'>submit</Button>
    </Form>
    </div>
  );
}

export default AddBook;