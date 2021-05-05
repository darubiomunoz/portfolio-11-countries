import styled from 'styled-components';

import { spacingExtraSmall } from '../../Variables';

const StyledDetailsDiv = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: ${spacingExtraSmall};
  display: flex;
  flex-direction: ${props => props.column ? 'column' : 'row'};
  flex-wrap: wrap;
  gap: ${spacingExtraSmall};
  background-color: transparent;
`;

export default StyledDetailsDiv;