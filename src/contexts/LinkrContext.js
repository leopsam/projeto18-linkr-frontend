import { createContext, useState } from 'react'
import { ThreeCircles, Bars } from 'react-loader-spinner'

export const LagContext = createContext({})

export function UserProvider( {children} ) {  
    const REACT_APP_API_URL = process.env.REACT_APP_API_URL
    const [userName, setUserName] = useState("")
    const [userId, setUserId] = useState("")
    const [avata, setAvata] = useState("")
    const [token, setToken] = useState()
    const [products, setProducts] = useState(undefined)
    const [idGame, setIdGame] = useState(undefined)
    const [game, setGame] = useState(undefined)
    const [tipo, setTipo] = useState("")
    const [count, setCount] = useState(2) 
    const inputDesbotado = "#F2F2F2"
    const inputAtivo = "#FFFFFF"
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
    <LagContext.Provider value={{
        products,
        setProducts,
        load,
        botaoLoading,
        idGame, 
        setIdGame,
        game,
        setGame,
        inputDesbotado,
        inputAtivo,
        REACT_APP_API_URL,
        userId,
        setUserId,
        token,
        setToken,
        userName,
        setUserName,
        setAvata,
        avata,
        setTipo,
        tipo,
        count,
        setCount,
    }}>
      {children}
    </LagContext.Provider>
  )
}