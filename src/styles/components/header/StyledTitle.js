import styled from "styled-components";

import { fontSizeSmall, fontWeightExtraBold } from '../../Variables';

const StyledTitle = styled.h1`
  width: fit-content;
  height: fit-content;
  font-size: ${fontSizeSmall};
  font-weight: ${fontWeightExtraBold};
  color: ${props => props.theme.font};
`;

export default StyledTitle;