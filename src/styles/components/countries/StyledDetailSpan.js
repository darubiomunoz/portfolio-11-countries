import styled from 'styled-components';

import {fontSizeSmall, fontWeightBold, fontWeightNormal  } from '../../Variables';

const StyledDetailSpan = styled.span`
  font-size: ${fontSizeSmall};
  font-weight: ${(props) => (props.bold ? fontWeightBold : fontWeightNormal)};
  background-color: ${props => props.theme.background1};
  color: ${props => props.theme.text2};
`;

export default StyledDetailSpan;