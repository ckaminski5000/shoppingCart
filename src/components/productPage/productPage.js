import React, { useState } from "react";
import {Container, Row, Col, Image, Button} from 'react-bootstrap';
import plus from '../../images/plus.png';
import './productPage.css';

export function ProductPage(props){

    const [quantity, setQuantity] = useState(1);

    return (
        <Container>
            <Row>
                <Col className="productImgBox" md={6} sm={12}><img className="productProfileImg" src={props.product.url} alt={props.product.title}/></Col>
                <Col md={6} sm={12}> 
                    <h2>{props.product.title}</h2>
                    <p className="productPrice">${props.product.price}</p>
                    <input className="input" onChange={(e) => setQuantity(e.target.value)} value={quantity} type="number" min="0" id="quantity"/>
                    <Button className="addCart" onClick={() => props.handleClick(props.product, quantity)} variant="primary"><Image className="cartImg" src={plus} alt="cart"/>Add to Cart</Button>
                    <p>{props.product.description}</p>
                </Col>
            </Row>


        </Container>
    
    
    
   );
}