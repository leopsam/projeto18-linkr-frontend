import { createContext, useState } from "react";


export const linkrContext = createContext({});

export function UserProvider({ children }) {
  const [token, setToken] = useState();
  const [infoUser, setInfoUser] = useState({});
  

  return (
    <linkrContext.Provider
      value={{
        token,
        setToken,
        infoUser,
        setInfoUser,
      }}
    >
      {children}
    </linkrContext.Provider>
  );
}
