import React from 'react';
import styled from 'styled-components';
import { myTheme } from '../style/Theme.styled';

type percentagePropsType = {
  percentage?: string;
};

export const ProgressBar = (props: percentagePropsType) => {
  return (
    <ProgressBarContainer>
      <ProgressBarFiller percentage={props.percentage ?? '50%'} />
    </ProgressBarContainer>
  );
};

const ProgressBarContainer = styled.div`
  margin-top: 4px;
  position: relative;
  border: 1px solid ${myTheme.yellow};
  width: 100%;
  height: 6px;
  border-radius: 15px;
  padding: 0 1px;
  overflow: hidden;
`;

const ProgressBarFiller = styled.div<{ percentage: string }>`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  background-color: ${myTheme.yellow};
  height: 2px;
  width: ${props => props.percentage}%;
  border-radius: 10px;
  transition: width 0.3s ease-in-out;
`;
