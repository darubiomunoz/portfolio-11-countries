import styled from "styled-components";

import { borderRadiusExtraSmall } from '../../Variables';

const StyledCard = styled.div`
  width: 70%;
  height: fit-content;
  border-radius: ${borderRadiusExtraSmall};
  background-color: ${props => props.theme.headerBackground};
  box-shadow: ${props => props.theme.shadow};
`;

export default StyledCard;
