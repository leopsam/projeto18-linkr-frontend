import styled from "styled-components";

const SearchMb = styled.div`
   display: flex;
   flex-direction: column; 
  
   margin-top: 80px;
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
            input{ 
                width: 500px;
            }
        }
}
    
`

export default SearchMb;