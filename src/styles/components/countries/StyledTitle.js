import styled from 'styled-components';

import { fontSizeNormal, fontSizeMedium, fontWeightExtraBold, spacingSmall, device } from '../../Variables';

const StyledTitle = styled.h3`
  margin-bottom: ${(props) => (props.noMargin ? "0" : spacingSmall)};
  text-align: start;
  font-size: ${fontSizeNormal};
  font-weight: ${fontWeightExtraBold};
  background-color: transparent;
  color: ${(props) => props.theme.text1};

  @media ${device.width411} {
    font-size: ${fontSizeMedium};
  }
`;

export default StyledTitle;