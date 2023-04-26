import { useFoodDataContext } from "../../Context/FoodDataContext";
import { MenuCard } from "../MenuCard/MenuCard";

import "./Menu.css";

export const Menu = () => {
  const { foodData, searchHandle, checkCategory, sortByPrice, dataToMap } =
    useFoodDataContext();
  return (
    <div className="menu-container">
      <div className="inputs-feilds">
        <input
          className="search-input"
          type="text"
          placeholder="search your food"
          onChange={searchHandle}
        />

        <div className="filters">
          <input
            type="checkbox"
            value="is_vegetarian"
            onChange={checkCategory}
          />
          <label>Veg</label>
        </div>

        <div className="filters">
          <input type="checkbox" value="is_spicy" onChange={checkCategory} />
          <label>Spicy</label>
        </div>

        <div className="filters">
          <input
            type="radio"
            name="sortByPrice"
            value="lowToHigh"
            onChange={sortByPrice}
          />
          <label>Low to high</label>
        </div>
        <div className="filters">
          <input
            type="radio"
            name="sortByPrice"
            value="highToLow"
            onChange={sortByPrice}
          />
          <label>High to low</label>
        </div>
      </div>

      <ul>
        {dataToMap?.map((item) => (
          <MenuCard {...item} />
        ))}
      </ul>
    </div>
  );
};
