import { InputTS } from "../../types/input.ts";
import * as C from "./styles.ts";
import { useForm} from "../../contexts/ThemeContext.tsx";
import {useState} from 'react'
import useDebounce from "./useDebounce";

const delay = 100

export const Input = ({value, setSearch,setRegion}: InputTS ) => {
  const {state} = useForm()

  const [input,  setInput] = useState('')


  const debouncedChange = useDebounce(setSearch, delay)
 
  
  const handelChange = (e: string) => {
    setInput(e)
    debouncedChange(e) 
  } 

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value)
  };

  return (
    <C.InputArea theme ={state.theme}>
      <input
        type="text"
        placeholder="Search by Country"
        value={value}
        onChange={(e) => handelChange(e.target.value)}
      />
      <select onChange={(e) => setRegion(e.target.value)}>
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
