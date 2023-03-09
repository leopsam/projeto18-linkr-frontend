import styled from "styled-components";

const StyledPost = styled.div`
  width: 611px;
  height: 276px;

  background: #171717;
  border-radius: 16px;

  padding: 18px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  h2 {
    color: #fff;
    font-size: 19px;
    line-height: 23px;
  }

  p {
    color: #b7b7b7;
    font-size: 17px;
    line-height: 20px;
    margin: 7px 0 10px;
  }

  & > div:first-of-type {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50px;
    img {
      display: block;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-bottom: 19px;
    }

    p {
      font-size: 11px;
      line-height: 13px;
      text-align: center;

      color: #ffffff;

      margin-top: 4px;
    }
  }
`;

export default StyledPost;
