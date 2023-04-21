import * as C from './styles.ts'

export const Input = () => {
    return(
        <C.InputArea>
           <input type="text" />
            <select>
            <option value = "Filter by Region" disabled selected></option>
            </select>
        </C.InputArea>
    )
   
}