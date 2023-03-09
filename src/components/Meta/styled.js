import styled from "styled-components";

const StyledMeta = styled.div`
  width: 503px;
  border-radius: 11px;
  overflow: hidden;
  display: flex;

  div {
    border-radius: 11px 0 0 11px;
    border: 1px solid #4d4d4d;
    border-right: none;

    padding: 24px 19px;

    h3 {
      font-size: 16px;
      line-height: 19px;

      color: #cecece;
      margin-bottom: 5px;
    }

    p {
      font-size: 11px;
      line-height: 13px;

      color: #9b9595;
    }

    p:last-of-type {
      margin-top: 13px;
      color: #cecece;
    }
  }

  img {
    width: 155px;
    object-fit: cover;
  }
`;

export default StyledMeta;
