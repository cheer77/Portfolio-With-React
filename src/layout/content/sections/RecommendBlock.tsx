import React from 'react';
import { Titles } from '../../../components/Titles';
import styled from 'styled-components';
import { ac } from '../../../utils/mixins';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import rec1 from '../../../images/recomend1.png';
import rec2 from '../../../images/recomend2.png';
import rec3 from '../../../images/recomend3.png';
import { Icons } from '../../../components/Icons';
import { myTheme } from '../../../style/Theme.styled';

export const RecommendBlock = () => {
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
    <RecommendSection>
      <Titles title={'recommendations'} />
      <Swiper {...swiperParams} modules={[Pagination]} pagination={{ clickable: true }}>
        <SwiperSlide>
          <SlideStyled>
            <StarBox>
              <Star count={5} />
            </StarBox>
            <h4>Great Quality!</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra
              morbi. Morbi donec amet....
            </p>

            <ImageBox>
              <img src={rec1} alt="User photo" />

              <div>
                <span>James Gouse</span>
                <p>Graphic Designer</p>
              </div>
            </ImageBox>
          </SlideStyled>
        </SwiperSlide>
        <SwiperSlide>
          <SlideStyled>
            <StarBox>
              <Star count={5} />
            </StarBox>
            <h4>Amazing work!</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra
              morbi. Morbi donec amet....
            </p>

            <ImageBox>
              <img src={rec2} alt="User photo" />

              <div>
                <span>Tiana Philips</span>
                <p>Photographer</p>
              </div>
            </ImageBox>
          </SlideStyled>
        </SwiperSlide>
        <SwiperSlide>
          <SlideStyled>
            <StarBox>
              <Star count={5} />
            </StarBox>
            <h4>Great Quality!</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra
              morbi. Morbi donec amet....
            </p>

            <ImageBox>
              <img src={rec3} alt="User photo" />

              <div>
                <span>Talan Westervelt</span>
                <p>Business man</p>
              </div>
            </ImageBox>
          </SlideStyled>
        </SwiperSlide>
      </Swiper>
    </RecommendSection>
  );
};

type StarProps = {
  count: number;
};

export const Star: React.FC<StarProps> = ({ count }) => {
  const stars = Array.from({ length: count }).map((_, index) => (
    <Icons key={index} iconId={'star'} width={'18'} height={'17.5'} />
  ));

  return <>{stars}</>;
};

const RecommendSection = styled.section`
  margin-bottom: ${ac('60px', '40px')};

  .swiper {
    padding-bottom: 30px;

    @media (max-width: 576px) {
      max-width: 310px;
      margin: 0 auto;
    }
  }

  .swiper-pagination {
    bottom: -4px;
  }
  .swiper-pagination-bullet {
    background: ${myTheme.gray.light};
  }

  .swiper-pagination-bullet-active {
    background: ${myTheme.yellow};
  }
`;

const SlideStyled = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 310px;
  width: 100%;
  background-color: #fff;
  min-height: 323px;
  padding: 25px 20px;

  h4 {
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    color: ${myTheme.black};
    margin-bottom: 18px;
  }

  p {
    font-size: 13px;
  }
`;

const StarBox = styled.div`
  display: flex;
  margin-bottom: 17px;
  svg + svg {
    margin-left: 10px;
  }
`;

const ImageBox = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  flex: 1;

  img {
    margin-right: 13px;
  }
  div {
    span {
      font-size: 18px;
      font-weight: 500;
      line-height: 22px;
      color: ${myTheme.black};
      margin-bottom: 5px;
    }
  }
`;
