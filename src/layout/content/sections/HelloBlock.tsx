import React from 'react';
import styled from 'styled-components';
import bg from '../../../images/bg.svg';
import profilePhoto from '../../../images/transparent-photo.png';
import { ac } from '../../../utils/mixins';
import { myTheme } from '../../../style/Theme.styled';
import { Icons } from '../../../components/Icons';
import { arrowRight } from '../../../animations/Animations';
import { BurgerMenu } from '../../../components/BurgerMenu';

export const HelloBlock = () => {
  return (
    <HelloSection>
      <BurgerMenu></BurgerMenu>

      <HelloSectionInner>
        <HelloTextBlock>
          <h1>
            I’m Alex Chervonnyi <span>Front-end</span> Developer
          </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque
            rutrum semper sed suspendisse nunc lectus.
          </p>

          <button>
            HIRE ME
            <Icons width={'11'} height={'10.6'} iconId={'arrowRight'}></Icons>
          </button>
        </HelloTextBlock>
        <HelloImgBlock>
          <img src={profilePhoto} alt="Developers Photo" />
        </HelloImgBlock>
      </HelloSectionInner>
    </HelloSection>
  );
};

const HelloSection = styled.section`
  position: relative;
  background-image: url(${bg});
  background-size: 90%;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #fff;
  z-index: 0;
  padding: 0 ${ac('40px', '10px')} 0;
  margin-bottom: ${ac('110px', '50px')};

  @media (max-width: 1200px) {
    //background-image: none;
    background-position: bottom;
  }
`;

const HelloSectionInner = styled.div`
  display: flex;
`;

const HelloTextBlock = styled.div`
  max-width: 500px;
  margin-bottom: ${ac('50px', '30px')};

  h1 {
    margin-top: ${ac('93px', '10px')};
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 60px;
    color: ${myTheme.gray.dark};

    span {
      color: ${myTheme.yellow};
    }
  }

  p {
    margin: 18px 0 42px;
    max-width: 400px;
  }

  button {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    color: ${myTheme.gray.dark};
    padding: 16px 32px;
    border-radius: 5px;
    background-color: ${myTheme.yellow};
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #fdc33a;
    }

    svg {
      position: relative;
      left: 9px;
      transition: left 6s ease-in-out;
    }

    &:hover svg {
      animation: ${arrowRight} 0.6s infinite alternate;
    }
  }
`;

const HelloImgBlock = styled.div`
  position: relative;
  max-width: ${ac('280px', '200px')};
  width: 100%;
  overflow: hidden;

  img {
    position: absolute;
    width: 100%;
    bottom: ${ac('-130px', '0px')};
  }
`;
