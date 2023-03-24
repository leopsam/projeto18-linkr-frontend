import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

export default function Hashtag({ name }) {
  return (
    <HashtagStyle>
      <Link to={`/hashtag/${name}`}>
        # {name}
      </Link>
    </HashtagStyle>
  );
}

const HashtagStyle = styled.div`
  font-size: 19px;
  font-weight: 700;
  font-family: 'Lato', sans-serif;
  width: fit-content;
  
  a {
    color: #ffffff;
    text-decoration: none;
  }
`