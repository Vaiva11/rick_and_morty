import { useState, useEffect } from "react";
import axios from "axios";
import { ResponseType } from "../types";

const useFetchItems = () => {
  const [items, setItems] = useState<ResponseType>();

  //use just axios
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };
    fetchItems();
  }, []);
  return items;
};

export default useFetchItems;
