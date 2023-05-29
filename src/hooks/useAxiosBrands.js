import { useState, useEffect } from "react";
import axios from "axios";

//esta funcion me da las marcas de los productos para los hombres, mujeres y la cara.
export function useAxiosBrands() {
  const [dataMen, setDataMen] = useState([]);
  const [dataWomen, setDataWomen] = useState([]);
  const [dataFace, setDataFace] = useState([]);
  const [loading, setLoading] = useState(true);

  const options = {
    method: "GET",
    url: "https://asos2.p.rapidapi.com/categories/list",
    params: { country: "US", lang: "en-US" },
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
        setDataMen(response.data.brands[0].children);
        setDataWomen(response.data.brands[2].children);
        setDataFace(response.data.brands[4].children);
      })
      .finally(() => setLoading(false))
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return { dataMen, dataWomen, dataFace, loading };
}
