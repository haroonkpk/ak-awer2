import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Header from "../Components/header";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [fullname, setfullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handlersubmit(e) {
    e.preventDefault();
    console.log(fullname, email, password);
    axios.post("http://localhost:8000/user", { fullname, email, password });
    navigate("/login");
  }

  return (
    <>
      <Header />
      <div style={{ width: "100%", height: "100vh", marginTop: "20px" }}>
        <Form className="container" onSubmit={handlersubmit}>
          <h1 className="bg-dark">Signup</h1>
          <Form.Group className=" bg-dark" controlId="formGroupEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter full name"
              value={fullname}
              onChange={(e) => setfullname(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3 bg-dark" controlId="formGroupPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3 bg-dark" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <div
            style={{
              width: "100%",
              height: "40px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button style={{ width: "100px" }} type="submit">
              Register
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default Signup;
