import * as C from "./styles";
import { useEffect, useState } from "react";
import { Input } from "../../components/input";
import { CountriesTs } from "../../types/Countries";
import {CountryItem} from '../../components/Countryitem'
import { api } from "../../api";

export const Countries = () => {
  const [countries, setCountries] = useState<CountriesTs[]>([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    getAllCountries();
  }, []);

  const getAllCountries = async () => {
    setloading(true);
    let countries = await api.getCountries()
    setCountries(countries);
    console.log(countries);
    setloading(false);
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
          <CountryItem
          name= {item.name}
          population ={item.population}
          region={item.region}
          capital={item.capital}
          flag ={item.flags.png}
          />

         ))
         
        }
      </div>
    </C.CountriesArea>
  );
};
