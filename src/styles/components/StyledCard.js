import styled from "styled-components";

import { colorOption5, borderRadiusExtraSmall,boxShadow } from '../Variables';

const StyledCard = styled.div`
  width: 70%;
  height: fit-content;
  background-color: ${colorOption5};
  border-radius: ${borderRadiusExtraSmall};
  box-shadow: ${boxShadow};
`;

export default StyledCard;
