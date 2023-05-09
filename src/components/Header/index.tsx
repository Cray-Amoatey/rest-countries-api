import * as C from "./styles";
import { themeActions, useForm } from "../../contexts/ThemeContext";

export const Header = () => {
  const { state, dispatch } = useForm();

  const handleChangeTheme = () => {
    const newTheme = state.theme === "dark" ? "light" : "dark";
    dispatch({
      type: themeActions.setTheme,
      payload: newTheme as "dark" | "light",
    });
  };

  return (
    <C.Header theme={state.theme}>
      <div className="container">
        <h1>Where in the World?</h1>
        <p onClick={handleChangeTheme}>
          {state.theme === "dark" ? "Dark Mode" : "Light Mode"}
        </p>
      </div>
    </C.Header>
  );
};
