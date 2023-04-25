import { useFoodDataContext } from "../../Context/FoodDataContext";
import { MenuCard } from "../MenuCard/MenuCard";

import "./Menu.css";

export const Menu = () => {
  const { foodData } = useFoodDataContext();
  return (
    <div>
      <ul>
        {foodData?.map((item) => (
          <MenuCard {...item} />
        ))}
      </ul>
    </div>
  );
};
