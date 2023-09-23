import styled from "styled-components";
import { perc } from "../utils/mixins";

export const Cont = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  width: ${perc(1440)};

  @media (max-width: 1080px) {
    width: 100%;
    padding: 0 20px;
  }
`;

export const ContentInner = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;
`;
