import styled from 'styled-components';

import { boxShadow, colorOption5, spacingRegular, spacingNormal, borderRadiusSmall } from './Variables';

const StyledSelect = styled.select`
  width: 50%;
  height: ${spacingNormal};
  border: none;
  border-radius: ${borderRadiusSmall}
  background-color: ${colorOption5};
  box-shadow: ${boxShadow};
`;

export default StyledSelect;