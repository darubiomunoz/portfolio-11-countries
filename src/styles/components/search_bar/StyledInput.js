import styled from "styled-components";

import {
  spacingRegular,
  spacingExtraSmall,
  borderRadiusExtraSmall,
  fontSizeSmall
} from "../../Variables";

const StyledInput = styled.input`
  width: 90%;
  height: ${spacingRegular};
  padding: ${spacingExtraSmall} ${spacingRegular};
  padding-left: ${spacingExtraSmall};
  border: none;
  border-radius: ${borderRadiusExtraSmall};
  font-size: ${fontSizeSmall};
  background-color: ${props => props.theme.headerBackground};
  color: ${props => props.theme.font};
`;

export default StyledInput;
