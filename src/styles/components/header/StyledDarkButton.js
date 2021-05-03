import styled from 'styled-components';

import { fontSizeSmall, fontWeightNormal } from '../../Variables';

const StyledDarkButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  font-size: ${fontSizeSmall};
  font-weight: ${fontWeightNormal};
  background-color: transparent;
  color: ${props => props.theme.text1};
`;

export default StyledDarkButton;