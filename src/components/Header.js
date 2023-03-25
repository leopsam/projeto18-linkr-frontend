import Cookies from "js-cookie";
import styled from "styled-components";
import axios from "axios";
import { useState , useEffect} from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
import {DebounceInput} from 'react-debounce-input';

export default function LinkSignup() {
  
  const [open, setOpen] = useState(false);
  const [state, setState] = useState(undefined);
  const [result, setResult] = useState([]);
  const navigate = useNavigate();
  const picture_url = Cookies.get("picture_url");

  function logout() {   
    navigate("/");
    Cookies.remove("email");
    Cookies.remove("password");
    Cookies.remove("token");
    Cookies.remove("picture_url");
    Cookies.remove("username");
  }
  useEffect(() => { 
        if(!state){setState(undefined)}

        const body = { searchQuery: state }
        const url = process.env.REACT_APP_API_URL + "/mebusca"
        const promise = axios.post(url, body)

        promise.then((res) => {  
          console.log(res.data) 
          console.log(state) 
          setResult(res.data)  
        })

        promise.catch(err => {
          console.log(err.response.data)           
        })    
      }, [state])
 
  return (
    <>
      <HeaderStyled>
        <h1>linkr</h1>       
        <Search>          
          <DebounceInput
            data-test="search"
            minLength={3}
            debounceTimeout={300}
            placeholder = "Search for people"
            value={state}
            onChange={(e) => {setState(e.target.value)}} 
          />        
          <SearchContainer>
            {result.map((r) => (
              <UsersSearch key={r.id}>
                <div>
                  <img src={r.picture_url} alt="profile" />
                  <p>{r.username}</p>                  
                </div>                
              </UsersSearch>              
            ))}                 
          </SearchContainer>
        </Search>      
        <div>
          <IconContext.Provider
            value={{
              color: "#FFFFFF",
              size: "30px",
            }}
          >
            {open ? (
              <AiOutlineUp onClick={() => setOpen(!open)} />
            ) : (
              <AiOutlineDown onClick={() => setOpen(!open)} />
            )}
          </IconContext.Provider>
          <img data-test="avatar" src={picture_url} alt="profile" />
        </div>
      </HeaderStyled>

      <Menu data-test="menu" open={open}>
        <p data-test="logout" onClick={() => logout()}>
          Logout
        </p>
      </Menu>
    </>
  );
}

const HeaderStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background-color: #151515;
    position: fixed;
    width: 100%;
    height: 72px;
    left: 0px;
    top: 0px;
    z-index: 1;
    h1{
        font-family: 'Passion One';
        font-style: normal;
        font-weight: 700;
        font-size: 49px;
        line-height: 54px;
        color: #FFFFFF;
    }
    img{
        width: 53px;
        height: 53px;
        border-radius: 26px;
        margin-left: 5px;
    }
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`
const Search = styled.div`
   display: flex;
   flex-direction: column; 
    input{        
        width: 563px;
        height: 45px; 
        background: #FFFFFF;
        border-radius: 8px;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
        line-height: 23px;
        color: black;
        border: none;
        ::placeholder{
            color: #C6C6C6;
            padding: 10px;
        }
        @media (max-width: 768px) {
            display: none;
            input{ 
                width: 1px;
            }
        }
}
    
`
const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    width: 563px;
    background: #E7E7E7;
    border-radius: 8px;
    position: absolute;
    top: 60px;
    @media (max-width: 768px) {
                 
    }    
`
const Menu = styled.div`   
    background-color: #171717;
    position: fixed;
    transform: ${({ open }) => open ? 'translateY(150%)' : 'translateY(0)'};
    top: 0;
    right: 0;   
    width: 150px;
    height: 47px;
    border-radius: 0 0 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    p {        
        font-family: 'Lato';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;  
        color: #FFFFFF;
        cursor: pointer;
    }  
`
const UsersSearch = styled.div`
  position: relative;
  border-radius: 8px;
  width: 97%;
  height: 50px;
  img{
    width: 39px;
    height: 39px;
  }
  p{
    margin: 0 10px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;
    color: #515151;
  }
    
`