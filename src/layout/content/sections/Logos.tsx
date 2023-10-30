import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Icons } from '../../../components/Icons';
import { ac } from '../../../utils/mixins';
import { myTheme } from '../../../style/Theme.styled';

const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const iconIds = ['logo1', 'logo2', 'logo3', 'logo4'];

export const Logos = () => {
  const colors = [
    generateRandomColor(),
    generateRandomColor(),
    generateRandomColor(),
    generateRandomColor(),
    generateRandomColor(),
    generateRandomColor(),
    generateRandomColor(),
    generateRandomColor(),
  ];

  const [logoColor, setLogoColor] = useState(() => {
    const initialColor = colors[Math.floor(Math.random() * colors.length)];
    return initialColor;
  });

  const changeColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    setLogoColor(randomColor);
  };

  useEffect(() => {
    const timer = setInterval(changeColor, 3000); // Изменяйте цвет каждые 3 секунды
    return () => clearInterval(timer);
  }, []);

  return (
    <LogosSection>
      <LogosInner>
        {/*<LogoWrapper onClick={changeColor}>*/}
        {/*  <Icons iconId={'logo1'} width="140" height="140" viewBox="0 0 140 140" fill={logoColor}></Icons>*/}
        {/*</LogoWrapper>*/}

        {iconIds.map((iconId, index) => (
          <LogoWrapper key={iconId} onClick={changeColor}>
            <Icons iconId={iconId} width="140" height="140" viewBox="0 0 140 140" fill={logoColor}></Icons>
          </LogoWrapper>
        ))}
      </LogosInner>
    </LogosSection>
  );
};

const LogosSection = styled.section`
  margin-bottom: ${ac('70px', '50px')};
`;

const LogosInner = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const LogoWrapper = styled.div`
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
  svg {
    transition: all 3s ease-in-out;
    cursor: pointer;
  }
`;
