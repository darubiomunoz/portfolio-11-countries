import styled from "styled-components";

import {
  spacingRegular,
  spacingExtraSmall,
  borderRadiusExtraSmall,
  fontSizeSmall,
  fontSizeRegular,
  device
} from "../../Variables";

const StyledInput = styled.input`
  width: 90%;
  height: ${spacingRegular};
  padding: ${spacingExtraSmall} ${spacingRegular};
  padding-left: ${spacingExtraSmall};
  border: none;
  border-radius: ${borderRadiusExtraSmall};
  font-size: ${fontSizeSmall};
  background-color: ${(props) => props.theme.background1};
  color: ${(props) => props.theme.text1};

  @media ${device.width411} {
    font-size: ${fontSizeRegular};
  }
`;

export default StyledInput;
