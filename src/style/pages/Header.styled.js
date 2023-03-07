import styled from "styled-components";

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
`

export default HeaderStyled;