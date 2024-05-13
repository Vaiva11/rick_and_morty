import axios from "axios";
import { useState, useEffect } from "react";
import { Character } from "../types";
import { API_URL } from "../routes";

const useFetchItem = (id: number) => {
  const [items, setItems] = useState<Character>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_URL}/${id}`);
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, [id]);
  return { items, loading };
};

export default useFetchItem;
