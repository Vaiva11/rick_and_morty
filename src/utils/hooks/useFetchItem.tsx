import axios from "axios";
import { useState, useEffect } from "react";
import { Character } from "../types";

const useFetchItem = (id: number) => {
  const [items, setItems] = useState<Character>();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/${id}`,
          {}
        );
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };
    fetchItems();
  }, [id]);
  return items;
};

export default useFetchItem;
