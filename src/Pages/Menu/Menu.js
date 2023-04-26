import { useFoodDataContext } from "../../Context/FoodDataContext";
import { MenuCard } from "../MenuCard/MenuCard";

import "./Menu.css";

export const Menu = () => {
  const { foodData, searchHandle, checkCategory, sortByPrice, dataToMap } =
    useFoodDataContext();
  return (
    <div className="menu-container">
      <input
        type="text"
        placeholder="serch your food"
        onChange={searchHandle}
      />

      <input type="checkbox" value="is_vegetarian" onChange={checkCategory} />
      <label>Veg</label>

      <input type="checkbox" value="is_spicy" onChange={checkCategory} />
      <label>Spicy</label>

      <input
        type="radio"
        name="sortByPrice"
        value="lowToHigh"
        onChange={sortByPrice}
      />
      <label>Low to high</label>

      <input
        type="radio"
        name="sortByPrice"
        value="highToLow"
        onChange={sortByPrice}
      />
      <label>High to low</label>

      <ul>
        {dataToMap?.map((item) => (
          <MenuCard {...item} />
        ))}
      </ul>
    </div>
  );
};
