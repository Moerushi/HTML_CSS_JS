// - Создайте контексты UserContext и ThemeContext с начальными значениями (например, имя пользователя: "Гость", тема: "светлая").
// - Реализуйте компонент App:
//     - Оберните дочерние компоненты в UserContext.Provider и ThemeContext.Provider.
//     - Добавьте возможность изменения имени пользователя и темы через интерфейс пользователя.
// - Создайте компоненты, использующие эти контексты:
//     - Header должен отображать приветствие с именем пользователя.
//     - Profile может показывать более детальную информацию о пользователе или просто использовать тему для стилизации.
//     - Footer должен использовать тему для стилизации и, возможно, отображать копирайт с текущим годом.
// - Добавьте возможность изменения темы и имени пользователя в интерфейсе, используя состояние в компоненте App и передавая функции для изменения через контекст.

import "./App.css";
import { useState, useEffect } from "react";
import { UserContext } from "./contexts/UserContext";
import { Header } from "./components/Header/Header";
import { MainWithLoading } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Provider } from "react-redux";
import { store } from "./store/store";

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [username, setUsername] = useState("Гость");
  const [data, setData] = useState('')


useEffect(() => {
 setTimeout(() => {
  setIsLoading(false);
  setData('New data from props');
 }, 2000);
}, [setIsLoading])


  return (
    <Provider store={store}>
      <ThemeProvider>
        <UserContext.Provider value={{ username, setUsername }}>
          <Header />
          <MainWithLoading isLoading={isLoading} data={data}/>
        </UserContext.Provider>
        <Footer />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
