import { NavLink } from "react-router-dom";

import "./Header.css";

import { useCartContext } from "../../Context/CartContext";
export const Header = () => {
  const { cart } = useCartContext();
  return (
    <div className="navigation">
      <h2>
        Abhi<span>Food</span>
      </h2>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/cart">Cart({cart.length})</NavLink>
      </nav>
    </div>
  );
};
