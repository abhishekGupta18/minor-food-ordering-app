import { NavLink } from "react-router-dom";

import { useCartContext } from "../../Context/CartContext";
export const Header = () => {
  const { cart } = useCartContext();
  return (
    <div>
      <NavLink to="/">Home</NavLink> ||
      <NavLink to="/menu">Menu</NavLink> ||
      <NavLink to="/cart">Cart({cart.length})</NavLink>
    </div>
  );
};
