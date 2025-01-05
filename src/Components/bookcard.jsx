import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Bookscard() {
  const [bookData,setBookData]= useState([]);

useEffect(()=>{
    axios.get("http://localhost:8000/book")
  .then((res)=>{
    setBookData(res.data);
  })

},[])


  return (
    <>
    {bookData.map((book)=>{
      return(
        <>
    <Card style={{ width: '18rem', background:"black",margin:"20px",height:'340px'}}>
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title style={{color:"white"}}>{book.title}</Card.Title>
        <Card.Text>
          {book.description}
        </Card.Text>
        <Button variant="primary">buy now</Button>
      </Card.Body>
    </Card>
        </>
      )
    })}
    </>
  );
}

export default Bookscard;