import { keyframes } from 'styled-components';

export const flicker = keyframes`
  0%{
    transform: scale(0.9);
    opacity: 0.9;
  }

  100%{
    transform: scale(1);
    opacity: 1;
  }
`;

export const arrowRight = keyframes`
  0%{
    left: 9px;
  }

  100%{
    left: 15px;
  }
`;
