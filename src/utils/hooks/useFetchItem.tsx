import axios from "axios";
import { useState, useEffect } from "react";
import { Character } from "../types";
import { API_URL } from "../routes";

const useFetchItem = (id: number) => {
  const [items, setItems] = useState<Character>();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`${API_URL}/${id}`, {});
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
