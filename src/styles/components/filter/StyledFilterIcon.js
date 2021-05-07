import styled from 'styled-components';

import StyledIcon from '../header/StyledIcon';

import { fontSizeSmall, fontSizeRegular, device } from '../../Variables';

const StyledFilterIcon = styled(StyledIcon)`
  margin: 0;
  background-color: ${(props) => props.theme.background1};
  font-size: ${fontSizeSmall};
  color: ${(props) => props.theme.text2};

  @media ${device.width411} {
    font-size: ${fontSizeRegular};
  }
`;

export default StyledFilterIcon;