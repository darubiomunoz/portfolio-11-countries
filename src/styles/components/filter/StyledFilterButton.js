import styled from 'styled-components';

import StyledDarkButton from '../header/StyledDarkButton';

import { spacingSmall, fontSizeSmall, borderRadiusExtraSmall, boxShadow } from '../../Variables';

const StyledFilterButton = styled(StyledDarkButton)`
  width: 65%;
  padding: ${spacingSmall};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${fontSizeSmall};
  border-radius: ${borderRadiusExtraSmall};
  box-shadow: ${boxShadow};
`;

export default StyledFilterButton;