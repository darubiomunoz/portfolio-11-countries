import styled from "styled-components";

import StyledDarkButton from "../header/StyledDarkButton";

import {
  spacingSmall,
  spacingRegular,
  fontSizeSmall,
  borderRadiusExtraSmall,
  device,
} from "../../Variables";

const StyledFilterButton = styled(StyledDarkButton)`
  width: 65%;
  padding: ${spacingSmall};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${fontSizeSmall};
  border-radius: ${borderRadiusExtraSmall};
  background-color: ${(props) => props.theme.background1};
  color: ${(props) => props.theme.text2};
  box-shadow: ${(props) => props.theme.shadow};
  cursor: pointer;

  @media ${device.width320} {
    width: 60%;
    padding: ${spacingSmall} ${spacingRegular};
  }
`;

export default StyledFilterButton;
