import styled from 'styled-components';

import { spacingSmall, boxShadow, colorOption5 } from '../../Variables';

const StyledHeader = styled.header`
  width: 100%;
  max-width: 100vw;
  height: 15vh;
  padding: 0 ${spacingSmall};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${boxShadow};
  background-color: ${colorOption5};
`;

export default StyledHeader;