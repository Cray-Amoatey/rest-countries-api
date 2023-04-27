import * as C from "./styles.ts";
import {InputTS} from '../../types/Input'

export const Input = ({value, setSearch}: InputTS ) => {
  return (
    <C.InputArea>
      <input
        type="text"
        placeholder="Search by Country"
        value={value}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select onChange={(e) => setSearch(e.target.value)}>
        <option value="Filter by Region" disabled selected>
          {" "}
          Filter by Region
        </option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Africa</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Ocea nia</option>
      </select>
    </C.InputArea>
  );
};
