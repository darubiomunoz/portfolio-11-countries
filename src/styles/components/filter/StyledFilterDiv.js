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

  @media ${device.width360} {
    width: 192px;
  }

  @media ${device.width375} {
    width: 201.2px;
  }

  @media ${device.width384} {
    width: 206.4px;
  }

  @media ${device.width411} {
    width: 222.79px;
  }

  @media ${device.width412} {
    width: 223.2px;
  }

  @media ${device.width414} {
    width: 224.4px;
  }

  @media ${device.width480} {
    width: 252px;
  }

  @media ${device.width540} {
    width: 288px;
  }
`;

export default StyledFilterDiv;
