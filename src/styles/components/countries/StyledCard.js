import styled from "styled-components";

import { borderRadiusExtraSmall, device } from '../../Variables';

const StyledCard = styled.div`
  width: 70%;
  height: fit-content;
  border-radius: ${borderRadiusExtraSmall};
  background-color: ${props => props.theme.background1};
  box-shadow: ${props => props.theme.shadow};

  @media ${device.width600} {
    width: 41%;
  }

  @media ${device.width1280} {
    width: 23%;
  }
`;

export default StyledCard;
