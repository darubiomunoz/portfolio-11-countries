import styled from 'styled-components';

import StyledFlagImg from '../countries/StyledFlagImg';

import { device } from '../../Variables';

const StyledInfoFlagImg = styled(StyledFlagImg)`
  height: auto;
  border-radius: 0;

  @media ${device.width1280} {
    width: 40%;
  }
`;

export default StyledInfoFlagImg;