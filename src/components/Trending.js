import React from 'react';
import Hashtag from './Hashtag';
import styled from "styled-components";

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
      <TrendingHeaderStyle>trendings</TrendingHeaderStyle>
      <TrendingBodyStyle>
        {HASHTAGS.map(hashtag => <Hashtag name={hashtag} key={hashtag} />)}
      </TrendingBodyStyle>
    </TrendingContainerStyle>
  );
}

const TrendingContainerStyle = styled.aside`
  width: 301px;
  background-color: #171717;
  border-radius: 16px;
  margin: 163px 0 0 25px;
  @media (max-width: 768px) {
        display: none;
    } 
`
const TrendingHeaderStyle = styled.header`
  padding: 9px 16px;
  font-size: 27px;
  font-weight: 700;
  color: #ffffff;
  border-bottom: 1px solid #484848;
`
const TrendingBodyStyle = styled.div`
  padding: 30px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`