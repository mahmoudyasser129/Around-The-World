import { useEffect, useState } from "react";

 export const useFetchData = (country)=> {
    const [result, setResult] = useState([]);
  const [filterCountries, setFilterCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if(country){
      fetchDataFromAPI()
    }else{
      fetchDataFromLocalstorage()
    }
  }, []);
  const fetchDataFromAPI = ()=>{
    let url = "https://restcountries.com/v3.1/all"
    if(country){
      url = `https://restcountries.com/v3.1/name/${country}`
    }
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if(country){
          setResult(data[0])
        }else{
          setResult(data);
          setFilterCountries(data);
          localStorage.setItem("countries", JSON.stringify(data))
        }
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }

  const fetchDataFromLocalstorage = ()=>{
    const data= JSON.parse(localStorage.getItem("countries"));
    if(data){
      setResult(data)
      setFilterCountries(data)
    }else(
      fetchDataFromAPI()
    )
  }

  return {result,
    filterCountries,
  setFilterCountries,
  isLoading,
  isError,
};

}
