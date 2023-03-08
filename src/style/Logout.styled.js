import styled from "styled-components";

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

export default Menu;