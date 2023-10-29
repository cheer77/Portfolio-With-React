import React from 'react';
import styled from 'styled-components';
import { Icons } from '../../../../components/Icons';
import { arrowRight } from '../../../../animations/Animations';
import { myTheme } from '../../../../style/Theme.styled';
import { ac } from '../../../../utils/mixins';

type BlogItemSlideTypeProps = {
  title: string;
  text: string;
  imgSrc: string;
  alt: string;
};

export const BlogItemSlide = (props: BlogItemSlideTypeProps) => {
  return (
    <ItemSlide>
      <img src={props.imgSrc} alt={props.alt} />

      <ItemBox>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <a href="#">
          Learn more
          <Icons iconId={'link-arrow'} width={'5px'} height={'7px'} />
        </a>
      </ItemBox>
    </ItemSlide>
  );
};

const ItemSlide = styled.div`
  max-width: 310px;
  background-color: #fff;
`;

const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px ${ac('17px', '10px')} 17px ${ac('25px', '10px')};
  min-height: 175px;

  h3 {
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 23px;
    color: ${myTheme.black};
    text-transform: capitalize;
    margin-bottom: 8px;
  }

  p {
    flex-grow: 1;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 9px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -moz-box;
    -moz-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    line-clamp: 3;
    box-orient: vertical;
  }

  svg {
    position: relative;
    left: 9px;
    transition: left 6s ease-in-out;
  }

  a {
    font-size: 18px;
    font-weight: 500;
    line-height: 123.6%;
    transition: all 0.3s ease-in-out;
    color: ${myTheme.yellow};
    &:hover {
      color: ${myTheme.yellow};
    }
    &:hover svg {
      animation: ${arrowRight} 0.6s infinite alternate;
    }
  }
`;
