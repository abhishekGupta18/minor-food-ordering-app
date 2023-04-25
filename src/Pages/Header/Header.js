import { NavLink } from "react-router-dom";
export const Header = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink> ||
      <NavLink to="/menu">Menu</NavLink> ||
      <NavLink to="/cart">Cart</NavLink>
    </div>
  );
};
