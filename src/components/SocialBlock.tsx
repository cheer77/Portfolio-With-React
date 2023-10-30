import React from 'react';
import styled from 'styled-components';
import { myTheme } from '../style/Theme.styled';
import { Icons } from './Icons';

export const SocialBlock = () => {
  return (
    <StyledSocialBlock>
      <StyledSocialIcon href="">
        <Icons iconId={'facebook'} />
      </StyledSocialIcon>
      <StyledSocialIcon href="">
        <Icons iconId={'instagram'} />
      </StyledSocialIcon>
      <StyledSocialIcon href="">
        <Icons iconId={'twitter'} />
      </StyledSocialIcon>
      <StyledSocialIcon href="">
        <Icons iconId={'linkedin'} />
      </StyledSocialIcon>
      <StyledSocialIcon href="">
        <Icons iconId={'youtube'} />
      </StyledSocialIcon>
      <StyledSocialIcon href="">
        <Icons iconId={'dribbble'} />
      </StyledSocialIcon>
    </StyledSocialBlock>
  );
};

const StyledSocialBlock = styled.div`
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 576px) {
    max-width: 350px;
    margin: 15px auto 0;
  }
`;

const StyledSocialIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 24px;
  width: 100%;
  min-height: 24px;
  border-radius: 50%;
  background-color: ${myTheme.yellow};
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }

  svg {
    fill: #2b2b2b;
    transition: all 0.3s ease-in-out;
  }

  &:hover svg {
    fill: ${myTheme.gray.light};
  }
`;
