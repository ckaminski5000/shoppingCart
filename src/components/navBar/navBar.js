import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";
import disneyStore from "../../images/disneyStore.svg";
import cart from "../../images/cart.png";

export function NavBar(props) {
  return (
    <div>
      <nav>
        <div className="links shop">
          <Link className="navLinks" to="/" exact="true">
            Shop
          </Link>
        </div>
        <div className="links middle"></div>
        <div className="links cart">
          <Link className="navLinks" to="/cart">
            <img className="cart" src={cart} alt="cart" />
          </Link>
          ({props.quantity})
        </div>
      </nav>
      <div className="logo">
        <div className="logoItems"></div>
        <div className="logoItems">
          <Link className="nuimos"to="/">
          <img className="logoImg" src={disneyStore} alt="logo" /> <div className="nuimos"> Nuimos</div>
          </Link>
        </div>
        <div className="logoItems"></div>
      </div>
    </div>
  );
}
