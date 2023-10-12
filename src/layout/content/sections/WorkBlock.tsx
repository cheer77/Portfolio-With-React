import React from 'react';
import styled from 'styled-components';
import { ac } from '../../../utils/mixins';
import { InfoBox } from '../../../components/InfoBox';
import { Titles } from '../../../components/Titles';

export const WorkBlock = () => {
  return (
    <WorkSection id={'work'}>
      <Titles title={'Work History'}></Titles>
      <WorkInner>
        <InfoBox labelTitle={'Junior Web Designer'} position={'intern'} date={'Mar 2017 - Dec 2017'} />
        <InfoBox labelTitle={'Senior Web Designer'} position={'middle'} date={'Feb 2019 - Mar 2020'} />
        <InfoBox labelTitle={'Lead Web Designer'} position={'Lead'} date={'May 2020 - Dec 2023'} />
      </WorkInner>
    </WorkSection>
  );
};

const WorkSection = styled.section`
  margin-bottom: ${ac('70px', '50px')};
`;

const WorkInner = styled.div`
  background-color: #fff;
  padding: 40px 30px;
`;
