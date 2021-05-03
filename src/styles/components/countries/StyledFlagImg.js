import styled from 'styled-components';

import { borderRadiusExtraSmall } from '../../Variables';

const StyledFlagImg = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
  object-position: center;
  border: none;
  border-top-left-radius: ${borderRadiusExtraSmall};
  border-top-right-radius: ${borderRadiusExtraSmall};
`;

export default StyledFlagImg;