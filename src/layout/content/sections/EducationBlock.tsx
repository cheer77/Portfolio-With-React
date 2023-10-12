import React from 'react';
import styled from 'styled-components';
import { ac } from '../../../utils/mixins';
import { Titles } from '../../../components/Titles';
import { InfoBox } from '../../../components/InfoBox';

export const EducationBlock = () => {
  return (
    <EducationSection id={'student'}>
      <Titles title={'Education'}></Titles>

      <EducationInner>
        <InfoBox labelTitle={'University of Toronto'} position={'student'} date={'Jan 2008 - Dec 2014'} />
        <InfoBox labelTitle={'Programming Course'} position={'student'} date={'Jun 2015 - Dec 2016'} />
        <InfoBox labelTitle={'Web developer courses'} position={'student'} date={'Jan 2017 - Mar 2017'} />
      </EducationInner>
    </EducationSection>
  );
};

const EducationSection = styled.section`
  margin-bottom: ${ac('70px', '50px')};
`;

const EducationInner = styled.div`
  background-color: #fff;
  padding: 40px 30px;
`;
