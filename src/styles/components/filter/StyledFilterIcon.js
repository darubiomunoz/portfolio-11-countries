import styled from 'styled-components';

import StyledIcon from '../header/StyledIcon';

const StyledFilterIcon = styled(StyledIcon)`
  margin: 0;
  background-color: ${props => props.theme.background1};
  color: ${props => props.theme.text2};
`;

export default StyledFilterIcon;