import StyledMeta from "./styled";

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
