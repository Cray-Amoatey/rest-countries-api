import * as C from "./styles.ts";
import {InputTS} from '../../types/Input'
import {useState} from 'react'
import useDebounce from "./useDebounce";

const delay = 500

export const Input = ({value, setSearch}: InputTS ) => {

  const [input, setInput] = useState('')

  const debouncedChange = useDebounce(setSearch, delay)
 
  
  const handelChange = (e: string) => {
    setInput(e)
    debouncedChange(e)
  } 

  return (
    <C.InputArea>
      <input
        type="text"
        placeholder="Search by Country"
        value={value}
        onChange={(e) => handelChange(e.target.value)}
      />
      <select onChange={(e) => setSearch(e.target.value)}>
        <option value="Filter by Region" disabled selected>Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Africa</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </C.InputArea>
  );
};
