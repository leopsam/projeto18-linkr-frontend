import { createContext, useState } from "react";
import { Bars } from "react-loader-spinner";

export const linkrContext = createContext({});

export function UserProvider({ children }) {
  const [token, setToken] = useState();
  const [infoUser, setInfoUser] = useState({});
  const botaoLoading = (
    <Bars
      height="30"
      width="80"
      radius="9"
      color="#ffffff"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );

  return (
    <linkrContext.Provider
      value={{
        botaoLoading,
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
