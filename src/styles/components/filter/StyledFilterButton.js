import styled from 'styled-components';

import StyledDarkButton from '../header/StyledDarkButton';

import { spacingSmall, fontSizeSmall, borderRadiusExtraSmall } from '../../Variables';

const StyledFilterButton = styled(StyledDarkButton)`
  width: 65%;
  padding: ${spacingSmall};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${fontSizeSmall};
  border-radius: ${borderRadiusExtraSmall};
  background-color: ${(props) => props.theme.headerBackground};
  color: ${(props) => props.theme.font};
  box-shadow: ${(props) => props.theme.shadow};
  cursor: pointer;
`;

export default StyledFilterButton;