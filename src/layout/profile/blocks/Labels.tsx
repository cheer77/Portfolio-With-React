import React from 'react';
import styled from 'styled-components';
import { myTheme } from '../../../style/Theme.styled';

export const Labels = () => {
  return (
    <LabelsBlock>
      <LabelItem>
        <span>Age:</span>
        <p>34</p>
      </LabelItem>

      <LabelItem>
        <span>Residence:</span>
        <p>BD</p>
      </LabelItem>

      <LabelItem color={myTheme.green}>
        <span>Freelance:</span>
        <p>Available</p>
      </LabelItem>

      <LabelItem>
        <span>Address:</span>
        <p>Kiyv, Ukraine</p>
      </LabelItem>
    </LabelsBlock>
  );
};

const LabelsBlock = styled.div`
  margin-top: 25px;
  border-bottom: 1.5px solid #f0f0f6;
  padding-bottom: 25px;
`;

type LabelItemType = {
  color?: string;
};

const LabelItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 9px;

  &:last-child {
    margin-bottom: 0;
  }

  span,
  p {
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
    text-transform: capitalize;
    text-align: right;
  }

  p {
    color: ${props => props.color || '#2b2b2b'};
  }

  span {
    margin-right: 15px;
    background-color: #ffb400;
    padding: 0 5px;
    color: #2b2b2b;
  }
`;
