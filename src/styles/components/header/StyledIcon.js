import styled from 'styled-components';

import { fontSizeSmall, spacingExtraSmall } from '../../Variables';

const StyledIcon = styled.i`
  margin-right: ${spacingExtraSmall};
  font-size: ${fontSizeSmall};
  color: ${props => props.theme.font};
`;

export default StyledIcon;