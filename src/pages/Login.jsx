import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/header";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navegate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    axios
      .post("http://localhost:8000/login", {
        email,
        password,
      })
      .then((res) => {
        if (res.data.success) {
          localStorage.setItem("user", JSON.stringify(res.data.user));
          localStorage.setItem("role", res.data.user.role);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("name", res.data.user.fullname);
          navegate("/");
        } else {
          alert(res.data.message || "Login failed");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Error: Please try again");
      });
  }

  return (
    <div>
      <Header />
      <Form
        className="container"
        style={{ width: "100%", height: "100vh", marginTop: "20px" }}
        onSubmit={submitHandler}
      >
        <h1 className="bg-dark">Login</h1>
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
            Login
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Login;
