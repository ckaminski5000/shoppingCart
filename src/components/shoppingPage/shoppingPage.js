import React, { useEffect, useState } from "react";
import "./shoppingPage.css";
import belle from "../../images/belle.png";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import plus from "../../images/plus.png";

export function ShoppingPage(props) {
  let productItems = props.products.map((product, index) => (
    <Col md={3} sm={6} key={index}>
      <div className="productBox">
        <Link onClick={() => props.setProductPage(product)} to="/product">
          <Image
            className="productImg"
            src={product.url}
            alt={product.title}
            fluid
          />
        </Link>
        <Link
          className="linkShop"
          onClick={() => props.setProductPage(product)}
          to="/product"
        >
          <h2 className="title">
            Disney Nuimos <br /> {product.title}
          </h2>
          <h3 className="price">${product.price}</h3>
        </Link>
        <Button
          className="btn"
          onClick={() => props.handleClick(product, 1)}
          variant="primary"
        >
          <Image className="cartImg" src={plus} alt="cart" />
          Add to Cart
        </Button>{" "}
      </div>
    </Col>
  ));

  return (
    <Container>
      <Row>{productItems}</Row>
    </Container>
  );
}
