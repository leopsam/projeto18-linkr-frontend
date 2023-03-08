import React from 'react';
import { Link } from 'react-router-dom';
import HashtagStyle from './style';

export default function Hashtag({ name }) {
  return (
    <HashtagStyle>
      <Link to={`/hashtag/${name}`}>
        # {name}
      </Link>
    </HashtagStyle>
  );
}