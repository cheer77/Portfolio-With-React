import styled from 'styled-components';
import { ac } from '../../utils/mixins';
import { Icons } from '../../components/Icons';
import { PhotoSoc } from './blocks/PhotoSoc';
import { Labels } from './blocks/Labels';
import { Progress } from './blocks/Progress';
import { myTheme } from '../../style/Theme.styled';

export function Profile() {
  return (
    <StyledProfile>
      <PhotoSoc></PhotoSoc>

      <Labels></Labels>

      <Progress></Progress>
    </StyledProfile>
  );
}

const StyledProfile = styled.aside`
  position: relative;
  top: 0;
  max-width: 21.25%;
  width: 100%;
  background-color: #fff;
  height: 100%;
  padding: 0px ${ac('45px', '10px')} 25px ${ac('40px', '10px')};
  box-shadow: 1px 0 16px -3px rgba(34, 60, 80, 0.1);
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0px; /* ширина всей полосы прокрутки */
  }

  &::-webkit-scrollbar-track {
    //visibility: hidden;
    background: ${myTheme.gray.light}; /* цвет зоны отслеживания */
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${myTheme.yellow};
    border-radius: 20px; /* округлось бегунка */
    border: 0.5px solid ${myTheme.yellow};
  }
`;
