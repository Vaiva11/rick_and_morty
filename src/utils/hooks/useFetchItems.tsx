import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ResponseType } from "../types";
import { API_URL } from "../routes";
import { Context } from "../context/Context";

const useFetchItems = (pageNumber: number) => {
  const [items, setItems] = useState<ResponseType>();
  const [loading, setLoading] = useState<boolean>(true);
  const { setCharacterCount, setCurrentPage } = useContext(Context);

  useEffect(() => {
    axios
      .get(`${API_URL}?page=${pageNumber}`)
      .then((response) => {
        setItems(response.data);
        setCharacterCount(response.data.info.count);
        setCurrentPage(pageNumber);
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [pageNumber]);

  return { items, loading };
};

export default useFetchItems;
