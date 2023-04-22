import * as C from "./styles";
import { Input } from "../../components/input";
import { api } from "../../api";
import { useEffect, useState } from "react";

export const Countries = () => {
  const [countries, setCountries] = useState([]);
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
        {loading && <div className=""> Loading...</div>}
        {!loading && countries.map((item, index) => <div>{item.name}</div>)}
      </div>
    </C.CountriesArea>
  );
};
