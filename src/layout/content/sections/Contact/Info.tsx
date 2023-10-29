import React from 'react';
import styled from 'styled-components';
import { myTheme } from '../../../../style/Theme.styled';
import { Icons } from '../../../../components/Icons';

type InfoTypeProps = {
  iconId: string;
  infoItems: { label: string; value: string }[];
};

export const Info = (props: InfoTypeProps) => {
  return (
    <InfoBox>
      <InfoIcon>
        <Icons iconId={props.iconId} />
      </InfoIcon>
      <InfoInner>
        {props.infoItems.map((item, index) => (
          <InfoItem key={index}>
            <span>{item.label}</span>
            <p>{item.value}</p>
          </InfoItem>
        ))}
      </InfoInner>
    </InfoBox>
  );
};

const InfoBox = styled.div`
  max-width: 370px;
  width: 100%;
  background-color: #fff;
  min-height: 210px;
  padding: 25px 25px 16px;
  margin-bottom: 18px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const InfoIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 30px;
  width: 40px;
  height: 40px;
  background-color: ${myTheme.yellow};
  border-radius: 50%;
`;

const InfoInner = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 18px;
    font-weight: 500;
    line-height: 123.6%;
  }
  p {
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
  }
`;

const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15.7px;

  &:last-child {
    margin-bottom: 0;
  }
`;
