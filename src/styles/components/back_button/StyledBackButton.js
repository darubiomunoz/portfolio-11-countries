import styled from "styled-components";

import {
  spacingExtraSmall,
  spacingSmall,
  borderRadiusExtraSmall,
  fontSizeSmall,
  device,
  fontSizeRegular
} from "../../Variables";

const StyledBackButton = styled.button`
  width: ${(props) => (props.big ? "100%" : "33%")};
  height: fit-content;
  margin: 0;
  padding: ${spacingExtraSmall} ${spacingSmall};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: ${borderRadiusExtraSmall};
  background-color: ${(props) => props.theme.background1};
  font-size: ${fontSizeSmall};
  color: ${(props) => props.theme.text1};
  box-shadow: ${(props) => props.theme.shadow};

  @media ${device.width411} {
    font-size: ${fontSizeRegular};
  }

  @media ${device.width1024} {
    width: 22%;
  }
`;

export default StyledBackButton;
