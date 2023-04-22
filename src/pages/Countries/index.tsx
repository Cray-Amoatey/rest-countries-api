import * as C from "./styles";
import { useEffect, useState } from "react";
import { Input } from "../../components/input";
import { CountriesTs } from "../../types/Countries";
import { api } from "../../api";

export const Countries = () => {
  const [countries, setCountries] = useState<CountriesTs[]>([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    getAllCountries();
  }, []);

  const getAllCountries = async () => {
    setloading(false);
    let countries = await api.getCountries();
    setCountries(countries);
    console.log(countries);
    setloading(true);
  };

  return (
    <C.CountriesArea>
      <Input />
      <div className="countries">
        {loading && 
          <div className=""> Loading...</div>
        }
        {!loading &&
         countries.map((item) => (
          <></>

         ))
         
        }
      </div>
    </C.CountriesArea>
  );
};
