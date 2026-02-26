import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { slideInLeft, slideInRight } from '../../../animations/motion';
import styled from 'styled-components';
import bg from '../../../images/bg.svg';
import profilePhoto from '../../../images/transparent-photo.png';
import { ac } from '../../../utils/mixins';
import { myTheme } from '../../../style/Theme.styled';
import { Icons } from '../../../components/Icons';
import { arrowRight } from '../../../animations/Animations';

export const HelloBlock = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <HelloSection id={'home'}>
      <HelloSectionInner>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInLeft}
        >
          <HelloTextBlock>
            <h1>
              I’m Alex Chervonnyi <span>Front-end</span> Developer
            </h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque
              rutrum semper sed suspendisse nunc lectus.
            </p>

            <button>
              HIRE ME
              <Icons width={'11'} height={'10.6'} iconId={'arrowRight'}></Icons>
            </button>
          </HelloTextBlock>
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInRight}
        >
          <HelloImgBlock>
            <img src={profilePhoto} alt="Developers Photo" />
          </HelloImgBlock>
        </motion.div>
      </HelloSectionInner>
    </HelloSection>
  );
};

const HelloSection = styled.section`
  position: relative;
  background-image: url(${bg});
  background-size: 90%;
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;
  z-index: 0;
  padding: 0 ${ac('40px', '10px')} 0;
  margin-bottom: ${ac('110px', '50px')};

  @media (max-width: 1200px) {
    //background-image: none;
    background-position: bottom;
  }
`;

const HelloSectionInner = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 992px) {
    padding-top: 60px;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

const HelloTextBlock = styled.div`
  max-width: 500px;
  margin-bottom: ${ac('50px', '30px')};

  h1 {
    margin-top: ${ac('93px', '10px')};
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 60px;
    color: ${myTheme.gray.dark};

    span {
      color: ${myTheme.yellow};
    }
  }

  p {
    margin: 18px 0 42px;
    max-width: 400px;
  }

  button {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    color: ${myTheme.gray.dark};
    padding: 16px 32px;
    border-radius: 8px; /* Slightly softer */
    background-color: ${myTheme.yellow};
    box-shadow: 0 4px 15px rgba(255, 180, 0, 0.4); /* Glow effect */
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #fdc33a;
      box-shadow: 0 6px 20px rgba(255, 180, 0, 0.6); /* Stronger glow on hover */
    }

    svg {
      position: relative;
      left: 9px;
      transition: left 6s ease-in-out;
    }

    &:hover svg {
      animation: ${arrowRight} 0.6s infinite alternate;
    }
  }
`;

const HelloImgBlock = styled.div`
  position: relative;
  max-width: ${ac('350px', '220px')}; /* Increased slightly for better fit */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end; /* Align to the bottom of the container */
  overflow: hidden;

  img {
    width: 100%;
    height: auto; /* Maintain aspect ratio */
    object-fit: contain;
    /* Removed absolute positioning to allow natural flow and scaling */
  }

  @media (max-width: 992px) {
    min-height: auto;
    max-width: 250px;
    margin-top: 30px; /* Add some space between text and image on mobile */
    
    img {
      width: 100%;
    }
  }

  @media (max-width: 576px) {
  }
`;
