import React from 'react';
import styled from 'styled-components';
import { myTheme } from '../style/Theme.styled';
import { ac } from '../utils/mixins';

type InfoBoxPropsType = {
  labelTitle: string;
  position: string;
  date: string;
};

export const InfoBox = (props: InfoBoxPropsType) => {
  return (
    <InfoItem>
      <InfoTitles>
        <h3>{props.labelTitle}</h3>
        <div>
          <p>{props.position}</p>
          <span>{props.date}</span>
        </div>
      </InfoTitles>

      <InfoText>
        <h3>Certificate of web training</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet
          porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque.
          Molestie risus enim neque eget dui.Ω
        </p>
      </InfoText>
    </InfoItem>
  );
};

const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1.5px solid #fafafa;
  padding: 30px 0;
  &:first-child {
    border-top: none;
    padding-top: 0;
  }
  &:last-child {
    padding-bottom: 0;
  }

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const InfoTitles = styled.div`
  max-width: 230px;
  color: ${myTheme.black};

  h3 {
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    text-transform: capitalize;
    margin-bottom: ${ac('32px', '16px')};
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    p {
      font-size: 15px;
      font-weight: 400;
      line-height: 24px;
      text-transform: capitalize;
      margin-right: 10px;
    }
    span {
      background-color: ${myTheme.yellow};
      font-size: 10px;
      font-style: normal;
      font-weight: 400;
      line-height: 1;
      color: #fff;
      padding: 4px 7px;
      white-space: nowrap;
    }
  }
`;

const InfoText = styled.div`
  max-width: 536px;
  margin-left: 30px;
  h3 {
    font-size: ${ac('18px', '16px')};
    font-weight: 500;
    line-height: 22px;
    text-transform: capitalize;
    color: ${myTheme.black};
    margin-bottom: ${ac('28px', '12px')};
  }
  p {
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    text-transform: capitalize;
  }

  @media (max-width: 576px) {
    margin-left: 0;
    margin-top: 30px;
  }
`;
