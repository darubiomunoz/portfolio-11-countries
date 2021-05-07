import styled from "styled-components";

import StyledDiv from "../search_bar/StyledDiv";

import { spacingExtraSmall, spacingSmall, spacingRegular, device } from "../../Variables";

const StyledFilterDiv = styled(StyledDiv)`
  width: 130px;
  height: fit-content;
  padding: ${spacingSmall};
  position: absolute;
  top: 40px;
  flex-direction: column;
  gap: ${spacingExtraSmall};
  display: ${(props) => (props.invisible ? "none" : "")};

  @media ${device.width280} {
    width: 156px;
  }

  @media ${device.width320} {
    width: 168px;
    padding: ${spacingSmall} ${spacingRegular};
  }
`;

export default StyledFilterDiv;
