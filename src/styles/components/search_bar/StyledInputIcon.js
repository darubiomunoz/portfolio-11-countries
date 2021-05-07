import styled from 'styled-components';

import StyledIcon from '../header/StyledIcon';

import { fontSizeSmall, fontSizeRegular, device } from '../../Variables';

const StyledInputIcon = styled(StyledIcon)`
  font-size: ${fontSizeSmall};
  color: ${(props) => props.theme.text1};

  @media ${device.width411} {
    font-size: ${fontSizeRegular};
  }
`;

export default StyledInputIcon;