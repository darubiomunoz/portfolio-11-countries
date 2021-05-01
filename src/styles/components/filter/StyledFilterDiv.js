import styled from 'styled-components';

import StyledDiv from '../search_bar/StyledDiv';

import { spacingExtraSmall, spacingSmall } from '../../Variables'

const StyledFilterDiv = styled(StyledDiv)`
  width: 130px;
  height: fit-content;
  padding: ${spacingSmall};
  position: absolute;
  top: 40px;
  flex-direction: column;
  gap: ${spacingExtraSmall};
  display: ${props => props.invisible ? 'none' : ''};
`;

export default StyledFilterDiv;
