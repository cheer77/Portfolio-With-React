import React from 'react';
import { Titles } from '../../../../components/Titles';
import styled from 'styled-components';
import { ac } from '../../../../utils/mixins';
import { BlogItemSlide } from './BlogItemSlide';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import blog1 from '../../../../images/portfolio/port1.webp';
import blog2 from '../../../../images/portfolio/port2.webp';
import blog3 from '../../../../images/portfolio/port3.webp';

import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

export const BlogBlock = () => {
  const swiperParams = {
    spaceBetween: 20,
    breakpoints: {
      576: {
        slidesPerView: 1,
        initialSlide: 1,
      },
      577: {
        slidesPerView: 2.2,
        initialSlide: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2.3,
        centeredSlides: true,
        initialSlide: 1,
      },
      769: {
        slidesPerView: 3,
      },
      993: {
        slidesPerView: 2.5,
      },
      1150: {
        slidesPerView: 3,
      },
    },
  };
  return (
    <BlogSection id={'blog'}>
      <Titles title={'Blog'} />

      <BlogInner>
        <Swiper {...swiperParams}>
          <SwiperSlide>
            <BlogItemSlide
              imgSrc={blog1}
              title={'How to make web templates'}
              text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna '}
              alt={'blog item'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <BlogItemSlide
              imgSrc={blog1}
              title={'How to make web templates'}
              text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna '}
              alt={'blog item'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <BlogItemSlide
              imgSrc={blog1}
              title={'How to make web templates'}
              text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna '}
              alt={'blog item'}
            />
          </SwiperSlide>
        </Swiper>
      </BlogInner>
    </BlogSection>
  );
};

const BlogSection = styled.section`
  margin-bottom: ${ac('70px', '50px')}; ;
`;

const BlogInner = styled.div`
  @media (max-width: 576px) {
    max-width: 310px;
    margin: 0 auto;
  }
`;
