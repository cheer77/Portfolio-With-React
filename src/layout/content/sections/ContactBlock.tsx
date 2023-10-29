import React from 'react';
import styled from 'styled-components';
import { Form } from './Contact/Form';
import { Info } from './Contact/Info';
import { ac } from '../../../utils/mixins';
import { myTheme } from '../../../style/Theme.styled';

export const ContactBlock = () => {
  const infoCountry = [
    { label: 'Country:', value: 'Ukraine' },
    { label: 'City:', value: 'Kyiv' },
    { label: 'Streat:', value: 'Khreshchatyk' },
  ];
  const infoContact = [
    { label: 'Email:', value: 'alex.c@gmail.com' },
    { label: 'Skype:', value: '@Alex' },
    { label: 'Telegram:', value: '@Alex' },
  ];
  const infoAddress = [
    { label: 'Phone', value: '+58 (021)356 587 235' },
    { label: 'Office:', value: '+58 (021)356 587 235' },
    { label: 'Personal:', value: '+58 (021)356 587 235' },
  ];
  return (
    <ContactSection id={'contact'}>
      <Form />
      <InfoContainer>
        <h2>Contact information</h2>
        <Info iconId={'map'} infoItems={infoCountry} />
        <Info iconId={'mail'} infoItems={infoContact} />
        <Info iconId={'phone'} infoItems={infoAddress} />
      </InfoContainer>
    </ContactSection>
  );
};

const ContactSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${ac('71px', '50px')};

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const InfoContainer = styled.div`
  max-width: 370px;
  width: 100%;
  margin-left: 30px;

  h2 {
    font-size: ${ac('32px', '27px')};
    font-style: normal;
    font-weight: 700;
    line-height: 123.6%;
    text-transform: capitalize;
    color: ${myTheme.black};
    margin-bottom: 50px;
  }

  @media (max-width: 768px) {
    max-width: 570px;
    margin-left: 0;
    margin-bottom: 70px;
  }
`;
