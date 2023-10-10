import React from 'react';
import styled from 'styled-components';
import { myTheme } from '../style/Theme.styled';
import { ac } from '../utils/mixins';

type TitlesProps = {
  title: string;
};

export const Titles: React.FC<TitlesProps> = ({ title }) => {
  return (
    <TitlesStyled>
      <TitlesBigText>{title}</TitlesBigText>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
        velit mollit. lorem ipsum
      </p>
    </TitlesStyled>
  );
};

const TitlesStyled = styled.div`
  max-width: 438px;
  margin: 0 auto 50px;

  p {
    text-align: center;
  }
`;

const TitlesBigText = styled.h3`
  text-align: center;
  color: ${myTheme.black};
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
  text-transform: capitalize;
  margin-bottom: ${ac('25px', '20px')}; ;
`;
