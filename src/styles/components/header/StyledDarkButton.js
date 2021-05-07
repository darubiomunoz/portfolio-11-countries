import styled from 'styled-components';

import { fontSizeSmall, fontSizeRegular, fontWeightNormal, device } from '../../Variables';

const StyledDarkButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  font-size: ${fontSizeSmall};
  font-weight: ${fontWeightNormal};
  background-color: transparent;
  color: ${(props) => props.theme.text1};
  cursor: pointer;

  @media ${device.width411} {
    font-size: ${fontSizeRegular};
  }
`;

export default StyledDarkButton;