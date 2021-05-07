import styled from 'styled-components';

import { borderRadiusExtraSmall , device } from '../../Variables';

const StyledFlagImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
  border: none;
  border-top-left-radius: ${borderRadiusExtraSmall};
  border-top-right-radius: ${borderRadiusExtraSmall};
`;

export default StyledFlagImg;