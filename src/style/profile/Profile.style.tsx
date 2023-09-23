import styled from "styled-components";
import { ac } from "../../utils/mixins";

export const Profile = styled.aside`
  max-width: 21.25%;
  width: 100%;
  background-color: #fc8c8c;
  height: 100%;
  padding: 0 ${ac("45px", "20px")} 0 ${ac("40px", "15px")}; ;;
`;

export const SocialBlock = styled.div`
  margin-top: 50px;

  img {
    margin: 0 auto;
  }
`;
