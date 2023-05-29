import { useState, useEffect } from "react";
import axios from "axios";

export function useAxiosDetailProduct(productId) {
  const [data, setData] = useState([]);
  const [dataImages, setDataImages] = useState([]);
  const [price, setPrice] = useState([]);
  const [loading, setLoading] = useState(true);

  const options = {
    method: "GET",
    url: "https://asos2.p.rapidapi.com/products/v3/detail",
    params: { id: productId },
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
        setData(response.data);
        setDataImages(response.data.media.images);
        setPrice(response.data.variants);
      })
      .finally(() => setLoading(false))
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return { data, dataImages, price, loading };
}
