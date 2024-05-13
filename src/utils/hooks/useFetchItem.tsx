import axios from "axios";
import { useState, useEffect } from "react";
import { Character } from "../types";
import { API_URL } from "../routes";

const useFetchItem = (id: number) => {
  const [items, setItems] = useState<Character>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get(`${API_URL}/${id}`)
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);
  return { items, loading };
};

export default useFetchItem;
