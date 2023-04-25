import { createContext, useContext, useState, useEffect } from "react";

import { fakeFetch } from "../FakeFetch";

export const FoodDataContext = createContext();

export const FoodDataContextProvider = ({ children }) => {
  const [foodData, setFoodData] = useState();

  const getData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/menu");
      if (response?.status === 200) {
        setFoodData(response?.data?.menu);
      }
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <FoodDataContext.Provider value={{ foodData }}>
      {children}
    </FoodDataContext.Provider>
  );
};

export const useFoodDataContext = () => {
  return useContext(FoodDataContext);
};
