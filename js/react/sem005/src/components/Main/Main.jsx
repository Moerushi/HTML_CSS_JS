import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useTheme } from "../../contexts/ThemeContext";

import { Counter } from "../Counter/Counter";
import { useDispatch } from "react-redux";
import {
  updateEmail,
  updateName,
  updateNameAndEmail,
} from "../../store/userReducer";

import { withLoadingIndicator } from "../withLoadingIndicator/withLoadingIndicator";

export const Main = ({data}) => {
  const { setUsername } = useContext(UserContext);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const { theme, toggleTheme } = useTheme();

  const dispatch = useDispatch();

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && email.trim()) {
      dispatch(updateNameAndEmail({ name, email }));
    } else if (name.trim()) {
      dispatch(updateName(name));
    } else if (email.trim()) {
      dispatch(updateEmail(email));
    }
    setName("");
    setEmail("");
  };
  return (
    <div className="">
      <form
        onSubmit={handlerSubmit}
        style={{ background: "#ccc", padding: "20px" }}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <button type="submit">Отправить</button>
      </form>

      <button onClick={() => setUsername(prompt("Напишите своё имя", "Макс"))}>
        Сменить имя
      </button>

      <button
        className={`btn-${theme === "light" ? "light" : "dark"}`}
        onClick={toggleTheme}>
        Сменить тему
      </button>
      
      <Counter />
      <p>{data}</p>
    </div>
  );
};

export const MainWithLoading = withLoadingIndicator(Main);
