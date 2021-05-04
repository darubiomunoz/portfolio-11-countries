import styled from 'styled-components';

import { fontSizeSmall, spacingExtraSmall } from '../../Variables';

const StyledIcon = styled.i`
  margin-right: ${spacingExtraSmall};
  font-size: ${fontSizeSmall};
  background: transparent;
  color: ${props => props.theme.text1};
`;

export default StyledIcon;