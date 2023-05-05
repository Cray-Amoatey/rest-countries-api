import * as C from "./styles";
import { useEffect, useState } from "react";
import { CountriesTS } from "../../types/Countries";
import { Input } from "../../components/Input";
import { api } from "../../api";
import { CountryItem } from "../../components/CountryItem";
import Pagination from "./Pagination";
import { useForm } from "../../contexts/ThemeContext";

const LIMIT = 12;

export const Countries = () => {
  const { state } = useForm();
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState<CountriesTS[]>([]);
  const [search, setSearch] = useState("");
  const [offset, setOffset] = useState(0);
  const [region, setRegion] = useState("");


  useEffect(() => {
    getAllCountries();
  }, []);

  const getAllCountries = async () => {
    setLoading(true);
    let countries = await api.getCountries();
    setCountries(countries);
    setLoading(false);
  };

  const lowerSearch = search.toLowerCase();

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(lowerSearch) &&
      (region === "" || country.region.toLowerCase() === region.toLowerCase())
  );

  const pagCountries = filteredCountries.slice(offset, offset + 12);

  return (
    <C.CountriesArea theme={state.theme}>
      <Input value={search}  setSearch ={setSearch} setRegion={setRegion}/>
      <div className="countries">
        {loading && <div className="loading">Loading...</div>}
        {!loading &&
          pagCountries.map((item) => (
            <CountryItem
              key={item.numericCode}
              name={item.name}
              population={item.population}
              region={item.region}
              capital={item.capital}
              flag={item.flags.png}
            />
          ))}
      </div>
      <Pagination
        limit={LIMIT}
        total={filteredCountries.length}
        offset={offset}
        setOffset={setOffset}
      />
    </C.CountriesArea>
  );
};
