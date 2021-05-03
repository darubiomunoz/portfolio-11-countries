import styled from 'styled-components';

import StyledIcon from '../header/StyledIcon';

const StyledFilterIcon = styled(StyledIcon)`
  margin: 0;
  background-color: ${props => props.theme.headerBackground};
  color: ${props => props.theme.font};
`;

export default StyledFilterIcon;