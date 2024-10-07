import { createContext } from "react";

// внутрь передаем структуру
export const UserContext = createContext({
  username: '',
  setUsername: () => {},
});
