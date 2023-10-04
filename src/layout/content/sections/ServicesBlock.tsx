import React from 'react';
import { Titles } from '../../../components/Titles';
import styled from 'styled-components';
import { Icons } from '../../../components/Icons';
import { myTheme } from '../../../style/Theme.styled';
import { ac } from '../../../utils/mixins';

export const ServicesBlock = () => {
  return (
    <ServicesSection>
      <Titles
        title={'my services'}
        description={
          'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'
        }
      ></Titles>

      <ServicesItems>
        <ServicesItem>
          <Icons width={'74'} height={'74'} iconId={'servicesWeb'}></Icons>
          <span>web development</span>
          <p>blog, e-commerce</p>
        </ServicesItem>

        <ServicesItem>
          <Icons width={'74'} height={'74'} iconId={'servicesUi'}></Icons>
          <span>uI/uX design</span>
          <p>Mobile app, website design</p>
        </ServicesItem>

        <ServicesItem>
          <Icons width={'74'} height={'74'} iconId={'servicesMicrophone'}></Icons>
          <span>sound design</span>
          <p>Voice Over, Beat Making</p>
        </ServicesItem>

        <ServicesItem>
          <Icons width={'74'} height={'74'} iconId={'servicesGame'}></Icons>
          <span>game design</span>
          <p>Character Design, Props & Objects</p>
        </ServicesItem>

        <ServicesItem>
          <Icons width={'74'} height={'74'} iconId={'servicesPhoto'}></Icons>
          <span>photography</span>
          <p>portrait, product photography</p>
        </ServicesItem>

        <ServicesItem>
          <Icons width={'74'} height={'74'} iconId={'servicesAdver'}></Icons>
          <span>advertising</span>
          <p>blog, e-commerce</p>
        </ServicesItem>
      </ServicesItems>
    </ServicesSection>
  );
};

const ServicesSection = styled.section`
  margin-bottom: ${ac('70px', '50px')}; ;
`;

const ServicesItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  grid-auto-flow: dense;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-items: center;
  align-items: center;
`;

const ServicesItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 310px;
  width: 100%;
  background-color: #fff;
  min-height: 225px;
  padding: 28px 15px 15px;

  span,
  p {
    text-align: center;
    font-style: normal;
    line-height: 22px;
    text-transform: capitalize;
  }

  span {
    font-weight: 500;
    font-size: 18px;
    margin: 26px 0 15px;
    color: ${myTheme.black};
  }
  p {
    font-weight: 400;
    font-size: 15px;
  }
`;
