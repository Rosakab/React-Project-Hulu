import { createContext, useState } from "react";

export const LoginContext = createContext();

const Provider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token")?? false);

  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn}}>
      {children}
    </LoginContext.Provider>
  );
};

export default Provider;