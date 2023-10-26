import React from "react";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

const App = () => {
  return (
    <div>
      <Card>
        <Card.Body>
          <Name />
          <Price />
          <Description />
          <Image />
        </Card.Body>
      </Card>
      <p>Hello, [Your First Name] or "Hello, there!"</p>
      {<img src={product.image} alt="Product" />}
    </div>
  );
};

export default App;
