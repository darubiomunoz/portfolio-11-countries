import styled from 'styled-components';

import StyledDiv from './StyledDiv';

import { spacingExtraSmall, spacingSmall } from './Variables'

const StyledFilterDiv = styled(StyledDiv)`
  width: 65%;
  height: fit-content;
  padding: ${spacingSmall};
  flex-direction: column;
  gap: ${spacingExtraSmall};
  display: none;
`;

export default StyledFilterDiv;