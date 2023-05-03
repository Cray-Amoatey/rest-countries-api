import * as C from "./styles";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {CountryTS} from '../../types/Country'
import { SingleCountry } from "../../components/SingleCountry";
import { api } from "../../api";
import {useForm} from '../../contexts/ThemeContext'


export const CountryPage = () => {
  const {state} = useForm()
  const { name, code } = useParams();

  const [loading, setloading] = useState(false);
  const [country, setCountry] = useState<CountryTS[]>([]);

  useEffect(() => {
    if (name) {
      getCountry(name)
    } else if (code) {   
      getCountry(code)
    }
  }, [name, code])

  const getCountry = async (param: string) => {
    setloading(true);
    const country = name
      ? await api.getCountry(param)
      : await api.getCountryByCode(param);
    setCountry(country)
    console.log(country)
    setloading(false)
  }

  return (
    <C.CountryPage theme={state.theme}>
      <div className="container">
        <Link to="/" className="back--button">
          Back
        </Link>
        {loading && <div className="loading">Loading...</div>}
        {!loading &&
          country.map((item) => (
            <SingleCountry
              flag={item.flags.png}
              name={item.name}
              nativeName={item.nativeName}
              population={item.capital}
              region={item.region}
              subregion={item.subregion}
              capital={item.capital}
              topLevelDomain={item.topLevelDomain[0]}
              currencie={item.currencies && item.currencies}
              Languages={item.languages}
              borders={item.borders}
            />
          ))}
      </div>
    </C.CountryPage>
  );
};
