import styled from 'styled-components';

import { fontSizeNormal, fontWeightExtraBold, spacingSmall } from '../../Variables';

const StyledTitle = styled.h3`
  margin-bottom: ${spacingSmall};
  text-align: start;
  font-size: ${fontSizeNormal};
  font-weight: ${fontWeightExtraBold};
  color: ${props => props.theme.font};
`;

export default StyledTitle;