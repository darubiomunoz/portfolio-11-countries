import styled from 'styled-components';

import { spacingSmall } from '../../Variables';

const StyledHeader = styled.header`
  width: 100%;
  max-width: 100vw;
  height: 15vh;
  padding: 0 ${spacingSmall};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${props => props.theme.shadow};
  background-color: ${props => props.theme.background1};
`;

export default StyledHeader;