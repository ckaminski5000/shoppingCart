import React from "react";
import "./shoppingCart.css";
import { Container, Row, Col, Image, Button} from "react-bootstrap";
import { Link } from 'react-router-dom';
import plus from "../../images/plus.png";
import minus from "../../images/minus.png";

const calculateSubTotal = (cart) => {
  let total = 0;
  cart.forEach((item) => {
    total += item.quantity * item.product.price;
  });
  total = Math.ceil(total * 100) / 100;
  return total.toFixed(2);
};

const calculateTax = (cart) => {
  let total = calculateSubTotal(cart);
  total = total * 0.0875;
  total = Math.ceil(total * 100) / 100
  return total.toFixed(2);
};

const calculateTotal = (cart) => {
  let total = calculateSubTotal(cart);
  total = total * 1.0875;
  total = Math.ceil(total * 100) / 100;
  return total.toFixed(2);
};

export function ShoppingCart(props) {
  let buttonStyle = {
    padding: "0px 0px 3px 0px",
    margin: 5,
  };

  let finalProducts = props.cart.map((item, index) => (
    <div className="rowrow" key={index}>
     <div style={{flex: 1}} ></div>
      <div className="colcol imgContainer">
      <Link onClick={()=> props.setProductPage(item.product)} to="/product">
<Image
          className="cartImgcart"
          src={item.product.url}
          alt={item.product.title}
        /></Link>
      </div>
      <div className="colcol" >
        <h2 className="productTitle">{item.product.title}</h2>
        <h3 className="productPrice">${item.product.price}</h3>
        <div>
          <div className="quantity">
            <div className="quantityInside">
              Quantity:
            </div>
            <div  className="quantityInside">
              <Button
                onClick={() => props.addQuantity(item.product, 1)}
                style={buttonStyle}
                className="addMinus"
                variant="primary"
              >
                <img className="addMinusImg" src={plus} alt="add quantity" />
              </Button>
            </div>
            <div style={{paddingTop: 5}}  className="quantityInside">
              {" "}
              <input
                className="quantityInput"
                type="text"
                value={item.quantity}
                readOnly
              />
            </div>
            <div  className="quantityInside">
              {" "}
              <Button
                onClick={() => props.subtractQuantity(item.product)}
                style={buttonStyle}
                className="addMinus"
                variant="primary"
              >
                <img
                  className="addMinusImg"
                  src={minus}
                  alt="subtract quantity"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div style={{flex: 1}} ></div>
    </div>
  ));

  let subTotal = (
    <span className="productPrice">${calculateSubTotal(props.cart)}</span>
  );
  let tax = <span className="productPrice">${calculateTax(props.cart)}</span>;
  let total = (
    <span className="productPrice">${calculateTotal(props.cart)}</span>
  );

  let purchaseButton = <Button onClick={() => alert('Thank you for trying out my Shopping Cart!  Stay tuned for further projects!')} variant="primary">Place Order</Button>

  return (
    <div>
      <h1 className="shopTitle">Shopping Cart</h1>
      <Container className="cartBox">
        {finalProducts}
        <Row className="rowrow">
          <Col md={3} xs={12}></Col>
          <Col className="colcol" md={3} xs={12}></Col>
          <Col className="colcol" md={3} xs={12}>
            <p>
              <span className="productTitle">Subtotal:</span> {subTotal}
              <br />
              <span className="productTitle">Tax:</span> {tax}
              <br />
              <span className="productTitle">Total:</span> {total}<br /><br />
              {purchaseButton}
            </p>
          </Col>
          <Col md={3} xs={12}></Col>
        </Row>
      </Container>
    </div>
  );
}
