import React from 'react';
import { Titles } from '../../../../components/Titles';
import styled from 'styled-components';
import { ac } from '../../../../utils/mixins';
import { BlogItemSlide } from './BlogItemSlide';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

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
    <BlogSection>
      <Titles title={'Blog'} />

      <BlogInner>
        <Swiper {...swiperParams}>
          <SwiperSlide>
            <BlogItemSlide />
          </SwiperSlide>
        </Swiper>
      </BlogInner>
    </BlogSection>
  );
};

const BlogSection = styled.section`
  margin-bottom: ${ac('70px', '50px')}; ;
`;

const BlogInner = styled.div``;
