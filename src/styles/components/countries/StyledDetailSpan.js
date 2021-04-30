import styled from 'styled-components';

import {fontSizeSmall, fontWeightBold, fontWeightNormal  } from '../../Variables';

const StyledDetailSpan = styled.span`
  font-size: ${fontSizeSmall};
  font-weight: ${props => props.bold ? fontWeightBold : fontWeightNormal};
`;

export default StyledDetailSpan;