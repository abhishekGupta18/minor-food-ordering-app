import { Routes, Route } from "react-router-dom";

import "./App.css";

import { Header } from "./Pages/Header/Header";
import { Home } from "./Pages/Home/Home";
import { Menu } from "./Pages/Menu/Menu";
import { Cart } from "./Pages/Cart/Cart";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
