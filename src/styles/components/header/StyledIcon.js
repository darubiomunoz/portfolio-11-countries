import styled from 'styled-components';

import { fontSizeSmall, fontSizeRegular, spacingExtraSmall, device } from '../../Variables';

const StyledIcon = styled.i`
  margin-right: ${spacingExtraSmall};
  font-size: ${fontSizeSmall};
  background: transparent;
  color: ${(props) => props.theme.text1};

  @media ${device.width411} {
    font-size: ${fontSizeRegular};
  }
`;

export default StyledIcon;