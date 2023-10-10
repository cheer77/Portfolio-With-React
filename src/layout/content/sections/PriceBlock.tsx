import React from 'react';
import styled from 'styled-components';
import { Titles } from '../../../components/Titles';
import { ac } from '../../../utils/mixins';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { myTheme } from '../../../style/Theme.styled';
import { Icons } from '../../../components/Icons';

export const PriceBlock = () => {
  // const isMobile = window.innerWidth <= 1024;

  // Настройки Swiper
  const swiperParams = {
    // slidesPerView: isMobile ? 1 : 3,
    spaceBetween: 10,
    breakpoints: {
      500: {
        slidesPerView: 1.4,
      },
      501: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2.3,
      },
      1200: {
        slidesPerView: 2.5,
      },
      1201: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <PriceSection>
      <Titles title={'Price plans'} />
      <Swiper {...swiperParams}>
        <SwiperSlide>
          <StyledSlide>
            <h4>silver</h4>

            <PriceBox>
              <span>$0.00</span>
              <p>/hour</p>
            </PriceBox>

            <p>For most businesses that want to optimize web queries</p>

            <ul>
              <ItemsLi textColor="#2B2B2B">
                <Icons iconId={'check'}></Icons>
                <p>UI Design</p>
              </ItemsLi>
              <ItemsLi textColor="#2B2B2B">
                <Icons iconId={'check'}></Icons>
                <p>web development</p>
              </ItemsLi>
              <ItemsLi>
                <Icons iconId={'close'}></Icons>
                <p>logo design</p>
              </ItemsLi>
              <ItemsLi>
                <Icons iconId={'close'}></Icons>
                <p>seo optimization</p>
              </ItemsLi>
              <ItemsLi>
                <Icons iconId={'close'}></Icons>
                <p>wordPress integration</p>
              </ItemsLi>
              <ItemsLi>
                <Icons iconId={'close'}></Icons>
                <p>5 Websites</p>
              </ItemsLi>
              <ItemsLi>
                <Icons iconId={'close'}></Icons>
                <p>unlimited user</p>
              </ItemsLi>
              <ItemsLi>
                <Icons iconId={'close'}></Icons>
                <p>20 gB bandwith</p>
              </ItemsLi>
            </ul>

            <button>ORDER NOW</button>
          </StyledSlide>
        </SwiperSlide>
        <SwiperSlide>
          <StyledSlide isPopular={true}>
            <h4>gold</h4>

            <PriceBox>
              <span>$50.00</span>
              <p>/hour</p>
            </PriceBox>

            <p>For most businesses that want to optimize web queries</p>

            <ul>
              <ItemsLi textColor="#2B2B2B">
                <Icons iconId={'check'}></Icons>
                <p>UI Design</p>
              </ItemsLi>
              <ItemsLi textColor="#2B2B2B">
                <Icons iconId={'check'}></Icons>
                <p>web development</p>
              </ItemsLi>
              <ItemsLi textColor="#2B2B2B">
                <Icons iconId={'check'}></Icons>
                <p>logo design</p>
              </ItemsLi>
              <ItemsLi textColor="#2B2B2B">
                <Icons iconId={'check'}></Icons>
                <p>seo optimization</p>
              </ItemsLi>
              <ItemsLi>
                <Icons iconId={'close'}></Icons>
                <p>wordPress integration</p>
              </ItemsLi>
              <ItemsLi>
                <Icons iconId={'close'}></Icons>
                <p>5 Websites</p>
              </ItemsLi>
              <ItemsLi>
                <Icons iconId={'close'}></Icons>
                <p>unlimited user</p>
              </ItemsLi>
              <ItemsLi>
                <Icons iconId={'close'}></Icons>
                <p>20 gB bandwith</p>
              </ItemsLi>
            </ul>

            <button>ORDER NOW</button>
          </StyledSlide>
        </SwiperSlide>

        <SwiperSlide>
          <StyledSlide>
            <h4>dimond</h4>

            <PriceBox>
              <span>$80.00</span>
              <p>/hour</p>
            </PriceBox>

            <p>For most businesses that want to optimize web queries</p>

            <ul>
              <ItemsLi textColor="#2B2B2B">
                <Icons iconId={'check'}></Icons>
                <p>UI Design</p>
              </ItemsLi>
              <ItemsLi textColor="#2B2B2B">
                <Icons iconId={'check'}></Icons>
                <p>web development</p>
              </ItemsLi>
              <ItemsLi textColor="#2B2B2B">
                <Icons iconId={'check'}></Icons>
                <p>logo design</p>
              </ItemsLi>
              <ItemsLi textColor="#2B2B2B">
                <Icons iconId={'check'}></Icons>
                <p>seo optimization</p>
              </ItemsLi>
              <ItemsLi textColor="#2B2B2B">
                <Icons iconId={'check'}></Icons>
                <p>wordPress integration</p>
              </ItemsLi>
              <ItemsLi textColor="#2B2B2B">
                <Icons iconId={'check'}></Icons>
                <p>5 Websites</p>
              </ItemsLi>
              <ItemsLi textColor="#2B2B2B">
                <Icons iconId={'check'}></Icons>
                <p>unlimited user</p>
              </ItemsLi>
              <ItemsLi textColor="#2B2B2B">
                <Icons iconId={'check'}></Icons>
                <p>20 gB bandwith</p>
              </ItemsLi>
            </ul>

            <button>ORDER NOW</button>
          </StyledSlide>
        </SwiperSlide>
      </Swiper>
    </PriceSection>
  );
};

const PriceSection = styled.section`
  margin-bottom: ${ac('70px', '50px')};
`;

type StyledSlide = {
  isPopular?: boolean;
};

const StyledSlide = styled.div<StyledSlide>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 310px;
  width: 100%;
  padding: 54px ${ac('31px', '20px')} 25px;
  background-color: #fff;

  ${props =>
    props.isPopular &&
    `
    &:before {
      content: 'most popular';
      position: absolute;
      display: flex;
      justify-content: center;
      color: ${myTheme.black};
      background-color: ${myTheme.yellow};
      width: 100%;
      top: 0;
      left: 0;
    }
  `}

  h4 {
    color: ${myTheme.black};
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
    margin-bottom: 19px;
  }

  p {
    text-align: center;
    margin-bottom: 21px;
  }
  ul {
    width: 100%;
  }

  button {
    max-width: 169px;
    width: 100%;
    margin-top: 21px;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${myTheme.black};
    border-radius: 30px;
    background-color: #fff;
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.15);
    padding: 11px 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: ${myTheme.yellow};
    }
  }
`;

const PriceBox = styled.div`
  display: flex;
  align-items: baseline;

  span {
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 123.6%;
    color: ${myTheme.black};
    margin-right: 10px;
  }
  p {
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    color: ${myTheme.black};
  }
`;

type AdvanstBoxType = {
  textColor?: string; // Пропс для цвета текста
};

const ItemsLi = styled.li<AdvanstBoxType>`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  color: ${props => (props.textColor ? props.textColor : 'inherit')};

  &:last-child {
    margin-bottom: 0;
  }

  p {
    text-align: left;
    margin-left: 15px;
    margin-bottom: 0;
  }
`;
