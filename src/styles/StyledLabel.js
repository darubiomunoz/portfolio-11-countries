import styled from 'styled-components';

import { colorOption1, fontSizeSmall } from './Variables';

const StyledLabel = styled.label`
  width: 100%;
  text-align: start;
  font-size: ${fontSizeSmall};
  color: ${colorOption1};
  cursor: pointer;
`;

export default StyledLabel;