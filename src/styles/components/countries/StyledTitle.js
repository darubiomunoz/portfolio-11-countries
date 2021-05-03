import styled from 'styled-components';

import { fontSizeNormal, fontWeightExtraBold, spacingSmall } from '../../Variables';

const StyledTitle = styled.h3`
  margin-bottom: ${spacingSmall};
  text-align: start;
  font-size: ${fontSizeNormal};
  font-weight: ${fontWeightExtraBold};
  background-color: transparent;
  color: ${(props) => props.theme.text1};
`;

export default StyledTitle;