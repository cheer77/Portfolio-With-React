import styled from 'styled-components';
import { myTheme } from '../../style/Theme.styled';
import { Icons } from '../../components/Icons';
import { ac } from '../../utils/mixins';
import { scroller } from 'react-scroll';
// import { scroller } from 'react-scroll';

// type MenuPropsType = {
//   id?: string;
// };

export function Menu() {
  const handleClick = (target: string) => {
    scroller.scrollTo(target, {
      duration: 500, // Длительность скролла
      smooth: true, // Включить плавный скролл
      offset: -70, // Опциональное смещение
    });
  };

  return (
    <StyledMenu>
      <StyledMenuInner>
        <StyleDayNight>
          <Icons width={'25'} height={'25'} iconId={'dayNight'}></Icons>
        </StyleDayNight>
        <StyledMenuBtn onClick={() => handleClick('home')}>
          <Icons width={'16'} height={'15'} iconId={'home'}></Icons>
        </StyledMenuBtn>

        <StyledMenuBtn onClick={() => handleClick('code')}>
          <Icons width={'16'} height={'15'} iconId={'code'}></Icons>
        </StyledMenuBtn>

        <StyledMenuBtn onClick={() => handleClick('student')}>
          <Icons width={'16'} height={'15'} iconId={'student'}></Icons>
        </StyledMenuBtn>

        <StyledMenuBtn onClick={() => handleClick('work')}>
          <Icons width={'16'} height={'15'} iconId={'work'}></Icons>
        </StyledMenuBtn>

        <StyledMenuBtn onClick={() => handleClick('blog')}>
          <Icons width={'16'} height={'15'} iconId={'blog'}></Icons>
        </StyledMenuBtn>

        <StyledMenuBtn onClick={() => handleClick('contact')}>
          <Icons width={'16'} height={'15'} iconId={'contact'}></Icons>
        </StyledMenuBtn>
      </StyledMenuInner>
    </StyledMenu>
  );
}

const StyledMenu = styled.nav`
  position: sticky;
  top: 0;
  max-width: 7.5%;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  overflow: auto;
  padding-bottom: 20px;

  &::-webkit-scrollbar {
    width: 2px; /* ширина всей полосы прокрутки */
  }

  &::-webkit-scrollbar-track {
    background: #d0d0d0; /* цвет зоны отслеживания */
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 20px; /* округлось бегунка */
    border: 1px solid ${myTheme.yellow};
  }

  @media (max-width: 992px) {
    position: fixed;
    bottom: 0;
    left: 0;
    top: inherit;
    max-width: 100%;
    height: auto;
    padding: 10px 0;
    z-index: 100;
    box-shadow: 0px -4px 17px 1px rgba(34, 60, 80, 0.2);
  }
`;

const StyledMenuInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 992px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const StyleDayNight = styled.a`
  margin-top: ${ac('52px', '20px')};
  cursor: pointer;
  margin-bottom: ${ac('140px', '80px')};

  svg {
    transition: all 0.3s ease-in-out;
    fill: ${myTheme.black};
  }

  @media (max-width: 992px) {
    margin-top: 6px;
    margin-bottom: 0;
  }
`;

const StyledMenuBtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f0f0f6;
  margin-bottom: ${ac('43px', '23px')};
  transition: all 0.3s ease-in-out;

  &:last-child {
    margin-bottom: 0;
  }

  svg {
    transition: all 0.3s ease-in-out;
    fill: ${myTheme.gray.light};
  }

  &:hover {
    background-color: ${myTheme.yellow};
  }

  &:hover svg {
    fill: ${myTheme.black};
  }

  @media (max-width: 992px) {
    margin-top: 0;
    margin-bottom: 0;
  }
`;
