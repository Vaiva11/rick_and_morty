import { useState, useEffect } from "react";
import axios from "axios";
import { ResponseType } from "../types";
import { API_URL } from "../routes";

const useFetchItems = (pageNumber: number) => {
  const [items, setItems] = useState<ResponseType>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_URL}?page=${pageNumber}`);
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, [pageNumber]);
  return { items, loading };
};

export default useFetchItems;
