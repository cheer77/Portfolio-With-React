import styled from 'styled-components';
import { HelloBlock } from './sections/HelloBlock';
import { ServicesBlock } from './sections/ServicesBlock';

export function Content() {
  return (
    <StyledContent>
      <HelloBlock></HelloBlock>
      <ServicesBlock></ServicesBlock>
    </StyledContent>
  );
}

const StyledContent = styled.main`
  flex: 1;
  height: 100%;
  margin: 0 27px 0 29px;
`;
