import styled from 'styled-components';

import { fontSizeSmall } from '../../Variables';

const StyledLabel = styled.label`
  width: 100%;
  text-align: start;
  font-size: ${fontSizeSmall};
  color: ${props => props.theme.text2};
  cursor: pointer;
`;

export default StyledLabel;