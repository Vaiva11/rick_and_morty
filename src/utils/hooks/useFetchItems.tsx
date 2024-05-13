import { useState, useEffect } from "react";
import axios from "axios";
import { ResponseType } from "../types";
import { API_URL } from "../routes";

const useFetchItems = (pageNumber: number) => {
  const [items, setItems] = useState<ResponseType>();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`${API_URL}?page=${pageNumber}`);
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };
    fetchItems();
  }, [pageNumber]);
  return items;
};

export default useFetchItems;
