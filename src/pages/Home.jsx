import React, { useState, useEffect } from 'react';
import Homeslider from '../Components/Homeslider';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/header';


export default function Home() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  // Check if token exists, if not, redirect to login page
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");  // Redirect if no token is found
    }
  }, [navigate]); // Empty dependency array ensures this runs once when component mounts

  // Set username if token exists
  useEffect(() => {
    const storedUsername = localStorage.getItem("name");
    setUsername(storedUsername || "Anonymous");  // Default to "Anonymous" if username is not found
  }, []); // This only runs once when the component mounts

  return (
  <>
    <Header/>
    <div style={{ width: '100%', minHeight: "100%" }}>
      <Homeslider 
        img1="book1.jpg" 
        label1="Fiction Bestsellers" 
        description1="Explore our curated selection of the latest and most popular fiction titles. From gripping thrillers to heartwarming romances" 
        img2="book2.jpg" 
        label2="Classic Literature" 
        description2="Rediscover the timeless works of literary giants in our Classic Literature section. These masterpieces have stood the test of time, offering profound insights into the human experience" 
        img3="book3.jpg" 
        label3="Children's Adventure Books" 
        description3="Ignite your child's imagination with our collection of adventure books for young readers. Each story promises thrilling escapades and whimsical characters that inspire creativity and encourage a love for reading"
        />
      <h2>
        Welcome to our bookstore, MR/Mrs. {username}
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem dolorem iste, quibusdam fugiat dicta doloremque tempore fugit et iusto, maiores omnis modi ullam reiciendis, recusandae autem vero quos. Accusamus, obcaecati cupiditate facilis fuga autem, ea voluptatum, at doloribus magni inventore tenetur. Omnis, error rem. Eius dolorum, reiciendis fugiat possimus a vitae maiores nihil! Laborum id quaerat totam molestias nostrum impedit aliquam, eveniet quia animi ut quod architecto?...
      </p>
    </div>
        </>
  );
}
