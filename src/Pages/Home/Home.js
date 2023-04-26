import "./Home.css";
import { NavLink } from "react-router-dom";
export const Home = () => {
  return (
    <div className="container">
      <h1>
        Welcome To <span>NeogFood</span> App{" "}
      </h1>
      <button>
        <NavLink to="/menu">Menu</NavLink>
      </button>
    </div>
  );
};
