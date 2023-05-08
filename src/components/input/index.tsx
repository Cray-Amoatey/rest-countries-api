import { InputTS } from "../../types/input";
import * as C from "./styles";
import { useForm } from "../../contexts/ThemeContext";
import useDebounce from "./useDebounce";

const delay = 100;

export const Input = ({ value, setSearch, setRegion }: InputTS) => {
  const { state } = useForm();

  const debouncedChange = useDebounce(setSearch, delay);

  const handelChange = (e: string) => {
    debouncedChange(e);
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRegion(e.target.value);
  };

  return (
    <C.InputArea theme={state.theme}>
      <input
        type="text"
        placeholder="Search by Country"
        value={value}
        onChange={(e) => handelChange(e.target.value)}
      />
      <select onChange={handleSelect}>
        <option value="Filter by Region" disabled selected>
          Filter by Region
        </option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </C.InputArea>
  );
};
