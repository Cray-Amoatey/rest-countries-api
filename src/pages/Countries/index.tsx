import * as C from "./styles";
import { useEffect, useState } from "react";
import { Input } from "../../components/input";
import { CountriesTs } from "../../types/Countries";
import {CountryItem} from '../../components/Countryitem'
import { api } from "../../api";
import {useForm} from '../../contexts/ThemeContext'

export const Countries = () => {
  const {state} = useForm()
  const [countries, setCountries] = useState<CountriesTs[]>([]);
  const [search, setSearch] = useState('')
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

  
const lowerSearch = search.toLowerCase()
  
  const filteredCountries = countries.filter(country => country
    .name.toLowerCase().includes(lowerSearch) || country
    .region.toLowerCase().includes(lowerSearch)
  )

  return (
    <C.CountriesArea theme={state.theme}>
      <Input
      value={search}
      setSearch={setSearch}
       />
      <div className="countries">
        {loading && 
          <div className="loading"> Loading...</div>
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
