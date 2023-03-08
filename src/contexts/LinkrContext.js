import { createContext, useState } from 'react'
import { ThreeCircles, Bars } from 'react-loader-spinner'

export const linkrContext = createContext({})

export function UserProvider( {children} ) {  
    const REACT_APP_API_URL = process.env.REACT_APP_API_URL
    const [token, setToken] = useState()
    const [infoUser, setInfoUser] = useState({})
    const inputFaded = "#F2F2F2"
    const activeInput = "#FFFFFF"
    const load = <ThreeCircles
        height="100"
        width="100"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
    />
    const botaoLoading = <Bars 
        height="30" 
        width="80" 
        radius="9"
        color="#ffffff" 
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}    
    /> 

  return (
    <linkrContext.Provider value={{        
        load,
        botaoLoading,       
        inputFaded,
        activeInput,
        REACT_APP_API_URL,       
        token,
        setToken,
        infoUser,
        setInfoUser
      
    }}>
      {children}
    </linkrContext.Provider>
  )
}