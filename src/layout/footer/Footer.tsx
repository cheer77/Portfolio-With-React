import React from 'react';
import styled from 'styled-components';

export const Footer = () => {
  return (
    <FooterSection>
      <p>2023 All Rights Reserved.Made by Alex.C</p>
    </FooterSection>
  );
};

const FooterSection = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: #fff;
  max-width: 100%;
  width: 100%;
`;
