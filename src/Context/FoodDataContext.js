import { createContext, useContext, useState, useEffect } from "react";

import { fakeFetch } from "../FakeFetch";

export const FoodDataContext = createContext();

export const FoodDataContextProvider = ({ children }) => {
  const [foodData, setFoodData] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    category: [],
    sort: "",
  });

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

  const searchHandle = (e) => {
    setFilters({ ...filters, search: e.target.value });
  };

  const checkCategory = (e) => {
    if (e.target.checked) {
      setFilters({
        ...filters,
        category: [...filters.category, e.target.value],
      });
    } else {
      setFilters({
        ...filters,
        category: filters?.category.filter((item) => item !== e.target.value),
      });
    }
  };

  const sortByPrice = (e) => {
    setFilters({ ...filters, sort: e.target.value });
  };

  const applyFilters = () => {
    let newFoodData = [...foodData];

    if (filters.search.length > 0) {
      newFoodData = newFoodData.filter(({ name }) =>
        name?.toLowerCase()?.includes(filters?.search?.toLowerCase())
      );
    }

    if (filters.category.length > 0) {
      newFoodData = newFoodData?.filter((item) =>
        filters?.category?.find((data) => item[data])
      );
    }
    if (filters.sort === "lowToHigh") {
      newFoodData = newFoodData.slice().sort((a, b) => a.price - b.price);
    } else if (filters.sort === "highToLow") {
      newFoodData = newFoodData.slice().sort((a, b) => b.price - a.price);
    }
    return newFoodData;
  };

  const dataToMap = applyFilters();

  return (
    <FoodDataContext.Provider
      value={{ foodData, searchHandle, checkCategory, sortByPrice, dataToMap }}
    >
      {children}
    </FoodDataContext.Provider>
  );
};

export const useFoodDataContext = () => {
  return useContext(FoodDataContext);
};
