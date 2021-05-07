import styled from 'styled-components';

import { spacingSmall, spacingRegular, device } from '../../Variables';

const StyledHeader = styled.header`
  width: 100%;
  max-width: 100vw;
  height: 50px;
  padding: 0 ${spacingSmall};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${props => props.theme.shadow};
  background-color: ${props => props.theme.background1};

  @media ${device.width320} {
    height: 70px;
    padding: ${spacingSmall} ${spacingRegular};
  }
`;

export default StyledHeader;