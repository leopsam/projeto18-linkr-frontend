import styled from "styled-components";

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 150vw;
    background-color: #151515;
    div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        width: 442px;
        margin-right: 100px;
        h1{
            font-family: 'Passion One', cursive;
            font-style: normal;
            font-weight: 700;
            font-size: 106px;
            line-height: 117px;
            color: #FFFFFF;
        }
        h2{
            font-family: 'Oswald', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 43px;
            line-height: 64px;
            color: #FFFFFF;
        }
}
`
export default TitleContainer;