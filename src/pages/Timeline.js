import Header from "../components/Header";
import Post from "../components/Post";
import Trending from "../components/Trending";
import Cookies from "js-cookie";
import axios from "axios";
import styled from "styled-components";
import { mockPost } from "../mock/mockPost";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PostCreator from "../components/PostCreator";
import {DebounceInput} from 'react-debounce-input';

export default function Timeline() {  
  const [state, setState] = useState([]);
  const navigate = useNavigate(); 

  const posts = mockPost;//retirar depois

  useEffect(() => {   
        const email = Cookies.get("email");
        const password = Cookies.get("password");       
        const body = { email, password }
        const url = process.env.REACT_APP_API_URL + "sign-in"
        const promise = axios.post(url, body)

        promise.then((res) => {      
          Cookies.set("email", email, { expires: 7 });
          Cookies.set("password", password, { expires: 7 });
          Cookies.set("username", res.data.user.username, { expires: 7 });
          Cookies.set("picture_url", res.data.user.picture_url, { expires: 7 });
          Cookies.set("token", res.data.token, { expires: 7 });
      })    
        promise.catch(err => {         
          alert("faça o login para continuar") 
          navigate("/");
          console.log(err.response.data)           
        })    
    }, [navigate]);
  
  return (
    <>
      <Header />
      <BodyStyled>        
        <ContainerMb>
        <Search>          
          <DebounceInput
            minLength={3}
            debounceTimeout={300}
            placeholder = "Search for people"
            value={state}
            onChange={(e) => {setState(e.target.value)}} 
          />        
          <SearchContainer>
              <p>{state}</p>                    
          </SearchContainer>
        </Search>         
          <h4>Timeline</h4>
          <PostCreator />
          {posts.map((post) => (
            <Post key={post.postId} {...post} />
          ))}
        </ContainerMb>
        <div>
          <Trending />
        </div>
      </BodyStyled>
    </>
  );
}

const BodyStyled = styled.div`
  margin-top: 72px;
  display: flex;
  justify-content: center;
  background-color: #333333;
  width: 100vw;
  height: 100vh; 
  z-index:-1;
  h4 {
    margin-top: 78px;
    margin-bottom: 43px;
    font-family: "Oswald", sans-serif;
    font-size: 43px;
    color: white;
   
  }
  @media (max-width: 768px) {
   
    h4{
      margin: 25px 17px;
    }
    } 
 
`
const ContainerMb = styled.div`
 
  @media (max-width: 768px) {
    width: 100%;

    } 
 
`
const Search = styled.div`
   display: none;
   flex-direction: column; 
   align-items: center;
   width: 100%; 
    input{        
    
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
          margin-top: 10px;
          width: 95%; 
       }
      } 
      @media (max-width: 768px) {
        display: flex;
       } 
   
`
const SearchContainer = styled.div`
    width: 563px;
    background: #E7E7E7;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
        width: 1px;            
    }    
`