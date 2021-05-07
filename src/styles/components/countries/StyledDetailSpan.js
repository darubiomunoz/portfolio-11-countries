import styled from 'styled-components';

import {fontSizeSmall, fontSizeRegular, fontWeightBold, fontWeightNormal, device  } from '../../Variables';

const StyledDetailSpan = styled.span`
  font-size: ${fontSizeSmall};
  font-weight: ${(props) => (props.bold ? fontWeightBold : fontWeightNormal)};
  background-color: transparent;
  color: ${(props) => props.theme.text1};

  @media ${device.width411} {
    font-size: ${fontSizeRegular};
  }
`;

export default StyledDetailSpan;