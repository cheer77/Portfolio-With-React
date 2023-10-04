import React, { useState } from 'react';
import styled from 'styled-components';
import { myTheme } from '../style/Theme.styled';

export const BurgerMenu: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);

  const toggleSpan = () => {
    setIsClicked(!isClicked);
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
  position: absolute;
  margin-top: 30px;
  max-width: 30px;
  width: 100%;
  min-height: 18px;
  transition: all 0.4s ease-in-out;
  left: ${props => (props.isClicked ? '93%' : '4%')};
  cursor: pointer;
  z-index: 200;

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
`;
