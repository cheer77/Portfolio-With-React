import React from 'react';
import MyPhoto from '../../../images/portfolio-photo.jpeg';
import styled from 'styled-components';
import { myTheme } from '../../../style/Theme.styled';
import { flicker } from '../../../animations/Animations';
import { SocialBlock } from '../../../components/SocialBlock';

export const PhotoSoc = () => {
  return (
    <PhotoBlock>
      <Photo></Photo>
      <h3>Oleksandr Chervonnyi</h3>
      <p>Font-end Developer</p>

      <SocialBlock />
    </PhotoBlock>
  );
};

const PhotoBlock = styled.div`
  margin-top: 50px;
  border-bottom: 1.5px solid #f0f0f6;
  padding-bottom: 25px;

  h3 {
    margin-top: 31px;
    text-align: center;
    color: #2b2b2b;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 22.248px;
    text-transform: capitalize;
  }

  p {
    text-align: center;
    color: #767676;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    text-transform: capitalize;
  }
`;

const Photo = styled.div`
  position: relative;
  max-width: 150px;
  width: 100%;
  min-height: 150px;
  border-radius: 50%;
  margin: 0 auto;
  background-image: url(${MyPhoto});
  background-position: 40% 47%;
  background-size: 240%;

  &::after {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    background-color: ${myTheme.green};
    right: 7px;
    bottom: 20px;
    border-radius: 50%;
    animation: ${flicker} 1s infinite alternate;
  }
`;
