import React from 'react';
import styled from 'styled-components';
import { myTheme } from '../../../style/Theme.styled';
import { ProgressBar } from '../../../components/ProgressBar';
import { ac } from '../../../utils/mixins';
import { Icons } from '../../../components/Icons';

export const Progress = () => {
  return (
    <>
      <ProgressBlock>
        <h4>Languages</h4>
        <ProgressBox>
          <ProgressTextBox>
            <p>German</p>
            <p>15%</p>
          </ProgressTextBox>
          <ProgressBar percentage={'15'}></ProgressBar>
        </ProgressBox>
        <ProgressBox>
          <ProgressTextBox>
            <p>English</p>
            <p>90%</p>
          </ProgressTextBox>
          <ProgressBar percentage={'90'}></ProgressBar>
        </ProgressBox>
        <ProgressBox>
          <ProgressTextBox>
            <p>Spanish</p>
            <p>50%</p>
          </ProgressTextBox>
          <ProgressBar percentage={'50'}></ProgressBar>
        </ProgressBox>
      </ProgressBlock>

      <ProgressBlock>
        <h4>Skills</h4>
        <ProgressBox>
          <ProgressTextBox>
            <p>Html</p>
            <p>95%</p>
          </ProgressTextBox>
          <ProgressBar percentage={'95'}></ProgressBar>
        </ProgressBox>
        <ProgressBox>
          <ProgressTextBox>
            <p>CSS</p>
            <p>98%</p>
          </ProgressTextBox>
          <ProgressBar percentage={'98'}></ProgressBar>
        </ProgressBox>
        <ProgressBox>
          <ProgressTextBox>
            <p>JS</p>
            <p>70%</p>
          </ProgressTextBox>
          <ProgressBar percentage={'70'}></ProgressBar>
        </ProgressBox>
        <ProgressBox>
          <ProgressTextBox>
            <p>React</p>
            <p>50%</p>
          </ProgressTextBox>
          <ProgressBar percentage={'50'}></ProgressBar>
        </ProgressBox>
        <ProgressBox>
          <ProgressTextBox>
            <p>NodeJs</p>
            <p>30%</p>
          </ProgressTextBox>
          <ProgressBar percentage={'30'}></ProgressBar>
        </ProgressBox>
      </ProgressBlock>

      <ProgressBlock>
        <h4>Extra Skills</h4>

        <ExtraBox>
          <Icons iconId={'copyBtn'} />
          <p>Bootstrap, Materialize</p>
        </ExtraBox>
        <ExtraBox>
          <Icons iconId={'copyBtn'} />
          <p>Stylus, Sass, Less</p>
        </ExtraBox>
        <ExtraBox>
          <Icons iconId={'copyBtn'} />
          <p>Gulp, Webpack, Grunt</p>
        </ExtraBox>
        <ExtraBox>
          <Icons iconId={'copyBtn'} />
          <p>GIT Knowledge</p>
        </ExtraBox>
      </ProgressBlock>

      <DownloadCV>
        Download cv <Icons iconId={'downloadBtn'} width={'14'} height={'17'} viewBox={'0 0 14 17'}></Icons>
      </DownloadCV>
    </>
  );
};

const ProgressBlock = styled.div`
  margin-top: 25px;
  border-bottom: 1.5px solid #f0f0f6;
  padding-bottom: 25px;

  h4 {
    font-size: 18px;
    font-weight: 500;
    line-height: 123.6%;
    text-transform: capitalize;
    color: ${myTheme.gray.dark};
    margin-bottom: 15px;
  }
`;

const ProgressBox = styled.div`
  margin-bottom: 9px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const ProgressTextBox = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    text-transform: capitalize;
  }
`;

const ExtraBox = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 5px;
  &:last-child {
    margin-bottom: 0;
  }

  p {
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    text-transform: capitalize;
    margin-left: ${ac('15px', '10px')};
  }
`;

const DownloadCV = styled.button`
  margin-top: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10.25px 5px;
  width: 100%;
  background-color: ${myTheme.yellow};
  color: ${myTheme.gray.dark};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #fdc33a;
  }

  svg {
    margin-left: 15px;
    transition: all 0.3s ease-in-out;
  }

  &:hover svg {
    transform: scale(1.2);
  }
`;
