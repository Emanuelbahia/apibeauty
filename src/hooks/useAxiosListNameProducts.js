import { useState, useEffect } from "react";
import axios from "axios";

export function useAxiosListNameProducts(id) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const options = {
    method: "GET",
    url: "https://asos2.p.rapidapi.com/products/v2/list",
    params: {
      store: "US",
      offset: "0",
      categoryId: "4209",
      limit: "48",
      q: id,
    },
    headers: {
      "X-RapidAPI-Key": "d5aad89182mshb010c79e9e89f0dp1819d3jsn2e51ec147d58",
      "X-RapidAPI-Host": "asos2.p.rapidapi.com",
    },
  };

  useEffect(() => {
    setLoading(true);
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setData(response.data.products);
      })
      .finally(() => setLoading(false))
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return { data, loading };
}
