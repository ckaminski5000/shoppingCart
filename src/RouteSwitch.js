import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/navBar/navBar";
import { ShoppingPage } from "./components/shoppingPage/shoppingPage";
import { ShoppingCart } from "./components/shoppingCart/shoppingCart";
import { ProductPage } from "./components/productPage/productPage";
import { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { items } from "./components/data.js";

const RouteSwitch = () => {
  const [products, setProducts] = useState([...items]);

  const [cart, setCart] = useState([]);

  const [quantity, setQuantity] = useState(0);
  const [currentProduct, setCurrentProduct] = useState(items[0]);

  const addQuantity = (itemToBeAdded, num) => {
    console.log('button clicked');
    setCart((prevCart) => {
      num = parseInt(num);
      let boo = prevCart.find(
      (itemInCart) => itemToBeAdded.title === itemInCart.product.title
    );
    if (boo === undefined) {
      let newCart = [...prevCart, { product: itemToBeAdded, quantity: num }];
      setTotalQuantity(newCart);
      return newCart;
    }
    else {
      /*let index = prevCart.findIndex(
        (item) => item.product.title === itemToBeAdded.title
      );*/
      let newCart = prevCart.map((item) => {
        if(item.product.title === itemToBeAdded.title){
          return {
              ...item, 
              quantity: item.quantity + num
          }
        }
        else{
          return item;
        }
      })
      //let newQuantity = parseInt(newCart[index].quantity) + num;
      //newCart[index].quantity = newQuantity;
      //setCart(newCart);
      setTotalQuantity(newCart);
      return newCart;
    }
      
    }
      );
    
    
    
  };

  const subtractQuantity = (itemToBeSubtracted) => {
    let newCart = [...cart];
    let index = newCart.findIndex(
      (item) => item.product.title === itemToBeSubtracted.title
    );
    let newQuantity = parseInt(newCart[index].quantity) - 1;
    if (newQuantity <= 0) {
      newCart.splice(index, 1);
      setCart(newCart);
      newCart.length === 0 ? setQuantity(0) : setTotalQuantity();
    } else {
      newCart[index].quantity = newQuantity;
      setCart(newCart);
      setTotalQuantity();
    }
  };

  const setTotalQuantity = (items) => {
    let total = 0;
    items.forEach((item) => (total += item.quantity));
    setQuantity(total);
  };

  const setProductPageContents = (itemToBeSet) => {
    console.log(itemToBeSet);
    setCurrentProduct(itemToBeSet);
  };

  return (
    <div>
      <NavBar quantity={quantity} />
      <Routes>
        <Route
          exact="true"
          path="/"
          element={
            <ShoppingPage
              products={products}
              handleClick={addQuantity}
              setProductPage={setProductPageContents}
            />
          }
        />
        <Route
          path="/product/:productId"
          element={
            <ProductPage product={currentProduct} handleClick={addQuantity} />
          }
        />
        <Route
          path="/cart"
          element={
            <ShoppingCart
              cart={cart}
              setProductPage={setProductPageContents}
              addQuantity={addQuantity}
              subtractQuantity={subtractQuantity}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default RouteSwitch;
