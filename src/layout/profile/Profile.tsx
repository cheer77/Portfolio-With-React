import styled, { css } from 'styled-components';
import { ac } from '../../utils/mixins';
import { PhotoSoc } from './blocks/PhotoSoc';
import { Labels } from './blocks/Labels';
import { Progress } from './blocks/Progress';
import { myTheme } from '../../style/Theme.styled';
import React, { useState } from 'react';

export function Profile({ isClicked }: { isClicked: boolean }) {
  // const [isClicked, setIsClicked] = useState(false);
  return (
    <StyledProfile isClicked={isClicked}>
      <PhotoSoc></PhotoSoc>

      <Labels></Labels>

      <Progress></Progress>
    </StyledProfile>
  );
}

// @ts-ignore
const StyledProfile = styled.aside<{ isClicked: boolean }>`
  position: relative;
  top: 0;
  max-width: 21.25%;
  //max-width: 305px;
  width: 100%;
  background-color: #fff;
  height: 100%;
  padding: 0px ${ac('45px', '10px')} 25px ${ac('40px', '10px')};
  box-shadow: 1px 0 16px -3px rgba(34, 60, 80, 0.1);
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0px; /* ширина всей полосы прокрутки */
  }

  &::-webkit-scrollbar-track {
    //visibility: hidden;
    background: ${myTheme.gray.light}; /* цвет зоны отслеживания */
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${myTheme.yellow};
    border-radius: 20px; /* округлось бегунка */
    border: 0.5px solid ${myTheme.yellow};
  }

  @media (max-width: 992px) {
    position: absolute;
    max-width: 300px;
    width: 100%;
    z-index: 99;
    left: -20px;
    transition: all 0.5s ease-in-out;
    ${props =>
      !props.isClicked &&
      css<{ isClicked: boolean }>`
        left: -500px;
      `}
  }
`;
