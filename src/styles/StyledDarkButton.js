import styled from 'styled-components';

import { colorOption1, fontSizeSmall, fontWeightNormal } from './Variables';

const StyledDarkButton = styled.button`
  border: none;
  font-size: ${fontSizeSmall};
  font-weight: ${fontWeightNormal};
  background-color: transparent;
  color: ${colorOption1};
`;

export default StyledDarkButton;