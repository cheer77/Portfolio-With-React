import styled from 'styled-components';
import { HelloBlock } from './sections/HelloBlock';
import { ServicesBlock } from './sections/ServicesBlock';
import { PriceBlock } from './sections/PriceBlock';
import { RecommendBlock } from './sections/RecommendBlock';
import { EducationBlock } from './sections/EducationBlock';
import { WorkBlock } from './sections/WorkBlock';
import { ProfileBlock } from './sections/ProfileBlock';

export function Content() {
  return (
    <StyledContent>
      <HelloBlock />
      <ServicesBlock />
      <PriceBlock />
      <RecommendBlock />
      <EducationBlock />
      <WorkBlock />
      <ProfileBlock />
    </StyledContent>
  );
}

const StyledContent = styled.main`
  flex: 1;
  margin: 0 27px 0 29px;
  overflow: hidden;

  @media (max-width: 992px) {
    margin: 0 0 0 0;
  }
`;
