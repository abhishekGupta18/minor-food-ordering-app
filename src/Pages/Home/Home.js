import { NavLink } from "react-router-dom";
export const Home = () => {
  return (
    <>
      <h1>Welcome To Neog Food App </h1>
      <button>
        <NavLink to="/menu">Menu</NavLink>
      </button>
    </>
  );
};
