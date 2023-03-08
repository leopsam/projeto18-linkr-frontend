import React from 'react';
import Hashtag from '../Hashtag';
import { TrendingBodyStyle, TrendingContainerStyle, TrendingHeaderStyle } from './style';

export default function Trending() {
  const HASHTAGS = [
    'javascript',
    'react',
    'react-native',
    'material',
    'web-dev',
    'mobile',
    'css',
    'html',
    'node',
    'sql'
  ];

  return (
    <TrendingContainerStyle>
      <TrendingHeaderStyle>
        trendings
      </TrendingHeaderStyle>
      <TrendingBodyStyle>
        {HASHTAGS.map(hashtag => <Hashtag name={hashtag} key={hashtag} />)}
      </TrendingBodyStyle>
    </TrendingContainerStyle>
  );
}