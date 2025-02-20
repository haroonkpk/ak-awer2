import Table from "react-bootstrap/Table";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import {useNavigate } from "react-router-dom";

function DeleteBookCard() {
  const navigate=useNavigate();
  const [book, setBook] = useState();
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    axios.get("https://ak-awer.vercel.app/book").then((res) => {
      setBookData(res.data);
    });
    setBook();
  },[book]);

  function deleteBook(e) {
    // e.preventDefault();
    axios.post("https://ak-awer.vercel.app/Delete", { book });
    navigate("/Books");
  }
  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Author Name</th>
            <th>Book Title</th>
            <th>DeleteBook</th>
          </tr>
        </thead>
        {bookData.map((book) => {
          function id (){
            setBook(book._id)
                axios.post("https://ak-awer.vercel.app/Delete", { book });
          }
          
          return (
            <tbody>
              <tr>
                <td>{book._id}</td>
                <td>{book.title}</td>
                <td>
                  <Button onClick={id}>Delete</Button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </>
  );
}

export default DeleteBookCard;
