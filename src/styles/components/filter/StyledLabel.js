import styled from 'styled-components';

import { fontSizeSmall, fontSizeRegular, device } from '../../Variables';

const StyledLabel = styled.label`
  width: 100%;
  text-align: start;
  font-size: ${fontSizeSmall};
  background-color: transparent;
  color: ${(props) => props.theme.text2};
  cursor: pointer;

  @media ${device.width411} {
    font-size: ${fontSizeRegular};
  }
`;

export default StyledLabel;