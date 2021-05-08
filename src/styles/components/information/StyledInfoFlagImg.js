import styled from "styled-components";

import StyledFlagImg from "../countries/StyledFlagImg";

import { boxShadow, device } from "../../Variables";

const StyledInfoFlagImg = styled(StyledFlagImg)`
  height: auto;
  border-radius: 0;
  box-shadow: ${boxShadow};

  @media ${device.width1280} {
    width: 40%;
  }
`;

export default StyledInfoFlagImg;
