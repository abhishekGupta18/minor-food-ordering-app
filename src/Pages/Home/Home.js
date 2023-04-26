import "./Home.css";
import { NavLink } from "react-router-dom";
import HomeImg from "../../Asset/home-img.png";
export const Home = () => {
  return (
    <div className="container">
      <img src={HomeImg} />
      <div className="container-text">
        <h1>
          Welcome To <span>AbhiFood</span> App{" "}
        </h1>
        <h2>
          Food Made With <span>Love !!</span>
        </h2>
        <button>
          <NavLink to="/menu">Explore Cusine</NavLink>
        </button>
      </div>
    </div>
  );
};
