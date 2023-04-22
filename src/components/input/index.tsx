import * as C from "./styles.ts";

export const Input = () => {
  return (
    <C.InputArea>
      <input 
       type="text"
       placeholder = 'Search by Country'
       />
      <select>
        <option value="Filter by Region" disabled selected>
          Filter by Region
        </option>
      </select>
    </C.InputArea>
  );
};
