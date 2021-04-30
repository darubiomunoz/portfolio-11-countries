import styled from "styled-components";

import {
  colorOption4,
  colorOption5,
  spacingRegular,
  spacingExtraSmall,
  borderRadiusExtraSmall,
  fontSizeSmall
} from "../../Variables";

const StyledInput = styled.input`
  width: 90%;
  height: ${spacingRegular};
  padding: ${spacingExtraSmall} ${spacingRegular};
  padding-left: 0;
  border: none;
  border-radius: ${borderRadiusExtraSmall};
  font-size: ${fontSizeSmall};
  background-color: ${colorOption5};
  color: ${colorOption4};
`;

export default StyledInput;
