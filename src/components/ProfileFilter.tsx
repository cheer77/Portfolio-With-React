import React, { useState } from 'react';
import styled from 'styled-components';
import port1 from '../images/portfolio/port1.webp';
import port2 from '../images/portfolio/port2.webp';
import port3 from '../images/portfolio/port3.webp';
import port4 from '../images/portfolio/port4.webp';
import port5 from '../images/portfolio/port5.webp';
import port6 from '../images/portfolio/port6.webp';
import port7 from '../images/portfolio/port7.webp';
import port8 from '../images/portfolio/port8.webp';
import port9 from '../images/portfolio/port9.webp';
import { myTheme } from '../style/Theme.styled';
import { Icons } from './Icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const ProfileFilter: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const images: Image[] = [
    { id: 1, category: 'ui', src: `${port1}` },
    { id: 2, category: 'ui', src: `${port2}` },
    { id: 3, category: 'web', src: `${port3}` },
    { id: 4, category: 'web', src: `${port4}` },
    { id: 5, category: 'mobile', src: `${port5}` },
    { id: 6, category: 'mobile', src: `${port6}` },
    { id: 7, category: 'illustration', src: `${port7}` },
    { id: 8, category: 'illustration', src: `${port8}` },
    { id: 9, category: 'illustration', src: `${port9}` },
  ];

  const filteredImages: Image[] = filter === 'all' ? images : images.filter(image => image.category === filter);

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  const swiperParams = {
    slidesPerView: 'auto',
    freeMode: true,
    momentum: true,
    sticky: true,
  };

  return (
    <ProfileFilterContainer>
      <ButtonsContainer>
        <Swiper {...swiperParams}>
          <SwiperSlide>
            <button onClick={() => handleFilterChange('all')}>All</button>
          </SwiperSlide>
          <SwiperSlide>
            <button onClick={() => handleFilterChange('ui')}>UI Design</button>
          </SwiperSlide>
          <SwiperSlide>
            <button onClick={() => handleFilterChange('web')}>Web Development</button>
          </SwiperSlide>
          <SwiperSlide>
            <button onClick={() => handleFilterChange('mobile')}>Mobile App</button>
          </SwiperSlide>
          <SwiperSlide>
            <button onClick={() => handleFilterChange('illustration')}>Illustration</button>
          </SwiperSlide>
        </Swiper>
      </ButtonsContainer>
      <ImageContainer>
        {filteredImages.map(image => (
          <ImageBoxLink>
            <Icons iconId={'plus'} width={'32'} height={'32'} />
            <Image key={image.id} src={image.src} alt={`Image ${image.id}`} />
          </ImageBoxLink>
        ))}
      </ImageContainer>
    </ProfileFilterContainer>
  );
};

interface Image {
  id: number;
  category: string;
  src: string;
}

const ProfileFilterContainer = styled.div``;

const ButtonsContainer = styled.div`
  max-width: 606px;
  width: 100%;
  margin: 0 auto 50px;

  .swiper-wrapper {
    div + div {
      margin-left: 30px;
    }
  }

  .swiper-slide {
    width: fit-content !important;
  }
`;

const ImageContainer = styled.div`
  display: grid;
  //grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  grid-template-columns: repeat(3, minmax(200px, 310px));
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  //justify-items: center;
  align-items: center;
`;

const ImageBoxLink = styled.a`
  position: relative;
  max-width: 310px;
  width: 100%;
  cursor: pointer;

  svg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    opacity: 0;
    z-index: 2;
    transition: all 0.3s ease-in-out;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${myTheme.yellow};
    background-image: url(../images/icons/icon-sprite.svg#plus);
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.3s ease-in-out;
  }

  &:hover svg {
    opacity: 1;
    transform: rotate(90deg);
  }
  &:hover&::before {
    opacity: 0.8;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;
