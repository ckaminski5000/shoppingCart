import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { NavBar } from "./components/navBar/navBar";
import { ShoppingPage } from "./components/shoppingPage/shoppingPage";
import { ShoppingCart } from "./components/shoppingCart/shoppingCart";
import { ProductPage } from "./components/productPage/productPage";
import { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import belle from "./images/belle.png";
import bunny from "./images/bunny.png";
import chipmunk from "./images/chipmunk.png";
import daisy from "./images/daisy.png";
import donald from "./images/donald.png";
import kermit from "./images/kermit.png";
import minnie from "./images/minnie.png";
import piggy from "./images/piggy.png";
import piglet from "./images/piglet.png";
import pooh from "./images/pooh.png";
import stitch from "./images/stitch.png";
import tigger from "./images/tiggere.png";

const RouteSwitch = () => {
  const [products, setProducts] = useState([
    {
      title: "Belle",
      price: 21.99,
      url: belle,
      description:
        "The bookish beauty is set to become a fashion model as this Belle nuiMOs plush. Featured here in her signature yellow dress, the Disney Princess can be dressed up in a wide range of chic, colorful, and fun outfits to suit your unique personality and taste.",
    },
    {
      title: "Judy Hopps",
      price: 21.99,
      url: bunny,
      description:
        "The first rabbit officer of the Zootopia Police Department is all set to become a fashion icon as this Judy Hopps nuiMOs plush. Originating in Japan, nuiMOs are a cute and cuddly collection of your favorite Disney companions that can be dressed up in a wide range of chic, colorful, and fun outfits to suit your unique personality and taste.",
    },
    {
      title: "Chip",
      price: 19.99,
      url: chipmunk,
      description:
        "That mischievous little 'munk is all set to become a fashion icon as this Chip nuiMOs plush. Originating in Japan, nuiMOs are a cute and cuddly collection of your favorite Disney companions that can be dressed up in a wide range of chic, colorful, and fun outfits to suit your unique personality and taste.",
    },
    {
      title: "Daisy Duck",
      price: 19.99,
      url: daisy,
      description:
        "Donald's sweetheart is set to become a fashion model as this Daisy Duck nuiMOs plush. Originating in Japan, nuiMOs are a cute and cuddly new collection of your favorite Disney companions that can be dressed up in a wide range of chic, colorful, and fun outfits to suit your unique personality and taste.",
    },
    {
      title: "Donald Duck",
      price: 19.99,
      url: donald,
      description:
        "Donald can tee off in style with this golf outfit #1 from the Summer Fashion Collection. This sporting combination, which includes Donald Duck Disney nuiMOs Plush, sun visor and golf club, is definitely par for the course.",
    },
    {
      title: "Kermit the Frog",
      price: 19.99,
      url: kermit,
      description:
        "It's not easy being green so now you can dress up Kermit in this stylish outfit featuring Navy Sailing Blazer and Khaki Pants. Our set combines a Kermit Disney nuiMOs Plush with this chic combination so you will both be ready for your next fashion shoot.",
    },
    {
      title: "Minnie Mouse",
      price: 19.99,
      url: minnie,
      description:
        "Minnie shows off her individual sense of style with this fashionable outfit. Our chic set combines a Minnie Mouse nuiMOs Plush with this floral jumpsuit, plaid blazer, and red purse so you will both be ready for your next photo shoot.",
    },
    {
      title: "Miss Piggy",
      price: 19.99,
      url: piggy,
      description:
        "The Muppets' resident prima donna is ready to take her rightful place as a fashion model. Our chic set combines a Miss Piggy Disney nuiMOs Plush with this print dress and blue faux fur coat so you will both be ready for your next fashion shoot.",
    },
    {
      title: "Piglet",
      price: 9.98,
      url: piglet,
      description:
        "Pooh's timid, yet tried and true, pal is all set to become a fashion model as this Piglet nuiMOs plush. Originating in Japan, nuiMOs are a cute and cuddly new collection of your favorite Disney companions that can be dressed up in a wide range of chic, colorful, and fun outfits to suit your unique personality and taste.",
    },
    {
      title: "Pooh Bear",
      price: 19.99,
      url: pooh,
      description:
        "The silly ol' bear is set to become a fashion model as this Winnie the Pooh nuiMOs plush. Originating in Japan, nuiMOs are a cute and cuddly new collection of your favorite Disney companions that can be dressed up in a wide range of chic, colorful, and fun outfits to suit your unique personality and taste.",
    },
    {
      title: "Stitch",
      price: 19.99,
      url: stitch,
      description:
        "Experiment 626 is all set to become a fashion model as this Stitch nuiMOs plush. Originating in Japan, nuiMOs are a cute and cuddly new collection of your favorite Disney companions that can be dressed up in a wide range of chic, colorful, and fun outfits to suit your unique personality and taste.",
    },
    {
      title: "Tigger the Tiger",
      price: 9.98,
      url: tigger,
      description:
        "Pooh's irrepressible pal is all set to become a fashion model as this Tigger nuiMOs plush. Originating in Japan, nuiMOs are a cute and cuddly new collection of your favorite Disney companions that can be dressed up in a wide range of chic, colorful, and fun outfits to suit your unique personality and taste.",
    },
  ]);

  const [cart, setCart] = useState([]);

  const [quantity, setQuantity] = useState(0);
  const [currentProduct, setCurrentProduct] = useState({
    title: "Tigger the Tiger",
    price: 9.98,
    url: tigger,
    description:
      "Pooh's irrepressible pal is all set to become a fashion model as this Tigger nuiMOs plush. Originating in Japan, nuiMOs are a cute and cuddly new collection of your favorite Disney companions that can be dressed up in a wide range of chic, colorful, and fun outfits to suit your unique personality and taste.",
  });

  const addQuantity = (itemToBeAdded, num) => {
    num = parseInt(num);
    let boo = cart.find(
      (itemInCart) => itemToBeAdded.title === itemInCart.product.title
    );
    if (boo === undefined) {
      setCart([...cart, { product: itemToBeAdded, quantity: num }]);
      setTotalQuantity();
    } else {
      let newCart = cart;
      let index = newCart.findIndex(
        (item) => item.product.title === itemToBeAdded.title
      );
      let newQuantity = parseInt(newCart[index].quantity) + num;
      newCart[index].quantity = newQuantity;
      setCart(newCart);
      setTotalQuantity();
    }
  };

  const subtractQuantity = (itemToBeSubtracted) => {
    let newCart = [...cart];
    let index = newCart.findIndex(
      (item) => item.product.title === itemToBeSubtracted.title
    );
    let newQuantity = parseInt(newCart[index].quantity) - 1;
    if(newQuantity <= 0){
        newCart.splice(index, 1);
        setCart(newCart);
        newCart.length === 0 ? setQuantity(0) : setTotalQuantity();
    }
    else{
        newCart[index].quantity = newQuantity;
        setCart(newCart);
        setTotalQuantity();
    }
  }

  const setTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => (total += item.quantity));
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
          exact
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
          path="/product"
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
              setProductPage={setProductPageContents}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default RouteSwitch;
