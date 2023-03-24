import styled from "styled-components";

export default function Meta({ title, description, url, image }) {
  return (
    <a href={url} rel="noreferrer" target="_blank" data-test="link">
      <StyledMeta>
        <div>
          <h3 data-test="username">{title}</h3>
          <p data-test="description">{description}</p>
          <p>{url}</p>
        </div>
        <img src={image} alt={title} />
      </StyledMeta>
    </a>
  );
}

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
