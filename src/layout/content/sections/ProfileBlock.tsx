import React from 'react';
import styled from 'styled-components';
import { ac } from '../../../utils/mixins';
import { Titles } from '../../../components/Titles';
import { ProfileFilter } from '../../../components/ProfileFilter';

export const ProfileBlock: React.FC = () => {
  return (
    <ProfileSection>
      <Titles title={'Portfolio'} />

      <ProfileFilter />
    </ProfileSection>
  );
};

const ProfileSection = styled.section`
  margin-bottom: ${ac('70px', '50px')};
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Item = styled.div`
  width: 100px;
  height: 100px;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin: 5px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;
