import React, { useState } from 'react';
import styled from 'styled-components';
import { myTheme } from '../style/Theme.styled';

type BurgerMenuProps = {
  isClicked: boolean;
  setIsClicked: (isClicked: boolean) => void;
};

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ isClicked, setIsClicked }) => {
  const toggleSpan = () => {
    setIsClicked(!isClicked);

    if (!isClicked) {
      document.body.classList.add('hidden');
    } else {
      document.body.classList.remove('hidden');
    }
  };

  return (
    <BurgerMenuStyled onClick={toggleSpan} isClicked={isClicked}>
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </BurgerMenuStyled>
  );
};

type BurgerMenuStyledProps = {
  isClicked: boolean;
};

const BurgerMenuStyled = styled.div<BurgerMenuStyledProps>`
  display: none;
  position: absolute;
  max-width: 30px;
  top: 30px;
  width: 100%;
  min-height: 18px;
  transition: all 0.4s ease-in-out;
  left: ${props => (props.isClicked ? '93%' : '5%')};
  cursor: pointer;
  z-index: 200;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 50%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }

  div {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  span {
    position: absolute;
    width: 100%;
    height: 2px;
    border-radius: 3px;
    background-color: ${myTheme.yellow};
    transition: all 0.3s ease-in-out;

    &:nth-child(1) {
      top: 0;
      bottom: 0;
      margin: ${props => (props.isClicked ? 'auto' : 'inherit')};
      transform: ${props => (props.isClicked ? 'rotate(45deg)' : 'none')};
    }
    &:nth-child(2) {
      top: 0;
      bottom: 0;
      margin: auto;
      opacity: ${props => (props.isClicked ? '0' : '1')};
    }
    &:nth-child(3) {
      bottom: 0;
      top: ${props => (props.isClicked ? '0' : 'inherit')};
      margin: ${props => (props.isClicked ? 'auto' : 'inherit')};
      transform: ${props => (props.isClicked ? 'rotate(-45deg)' : 'none')};
    }
  }

  @media (max-width: 992px) {
    display: block;
  }

  @media (max-width: 576px) {
    left: ${props => (props.isClicked ? '94.5%' : '4%')};
  }
`;
