import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import myImage from "./mercedes.jpg"
const App = () => {
  const firstName = ""
  return (
    <div>
     <Card style={{ width: '18rem' }}>
        <Image></Image>
        <Card.Body>
          <Name></Name>
          <Price></Price>
          <Description ></Description>
      
        </Card.Body>
      </Card>
      
      {firstName && <img src={myImage} alt ='myImage' />}



      
    </div>
  );
};

export default App;
