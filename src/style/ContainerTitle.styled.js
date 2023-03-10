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
    }
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
            @media (max-width: 768px) {
                flex-direction: column;
                height: 173px;
                width: 150vw;
                div{
                    display: flex;                   
                    align-items: center;
                    justify-content: center;                    
                    margin-right: 0;
                    }
                h1{
                        font-family: 'Passion One', cursive;
                        font-style: normal;
                        font-weight: 700;
                        font-size: 76px;
                        line-height: 83.68px;
                        
                    }
                h2{
                        font-family: 'Oswald', sans-serif;
                        font-style: normal;
                        font-weight: 700;
                        font-size: 23px;
                        line-height: 34.09px;
                        width: 237px;
                        height: 68px;
                        
                    }
            }

`
export default TitleContainer;