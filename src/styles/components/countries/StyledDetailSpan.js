import styled from 'styled-components';

import {fontSizeSmall, fontWeightBold, fontWeightNormal  } from '../../Variables';

const StyledDetailSpan = styled.span`
  font-size: ${fontSizeSmall};
  font-weight: ${(props) => (props.bold ? fontWeightBold : fontWeightNormal)};
  background-color: transparent;
  color: ${props => props.theme.text1};
`;

export default StyledDetailSpan;