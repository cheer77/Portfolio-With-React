import styled from 'styled-components';
import { perc } from '../utils/mixins';

export const Cont = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  min-width: 360px;
  width: ${perc(1440)};

  @media (max-width: 992px) {
    width: 100%;
    padding: 0 15px 60px 15px;
  }
`;

export const ContentInner = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;
